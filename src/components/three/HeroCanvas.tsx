"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Sparkles, ContactShadows } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  HueSaturation,
} from "@react-three/postprocessing";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function usePointer() {
  const pointer = useRef({ x: 0, y: 0 });
  const { gl } = useThree();

  useEffect(() => {
    const el = gl.domElement;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      pointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [gl]);

  return pointer;
}

function CameraRig() {
  const { camera } = useThree();
  const pointer = usePointer();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const targetX = 0.15 + pointer.current.x * 0.45;
    const targetY = 1.35 + pointer.current.y * 0.22;
    camera.position.x += (targetX - camera.position.x) * 0.045;
    camera.position.y += (targetY - camera.position.y) * 0.045;
    camera.position.z = 5.4 + Math.sin(t * 0.18) * 0.06;
    camera.lookAt(0.55, 0.45, 0);
  });

  return null;
}

function TennisSeam({
  radius = 0.58,
  flip = 1,
}: {
  radius?: number;
  flip?: number;
}) {
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 160; i++) {
      const a = (i / 160) * Math.PI * 2;
      const x = Math.cos(a) * radius;
      const y = Math.sin(a * 2) * radius * 0.55 * flip;
      const z = Math.sin(a) * radius;
      points.push(new THREE.Vector3(x, y, z).normalize().multiplyScalar(radius));
    }
    return new THREE.CatmullRomCurve3(points, true);
  }, [radius, flip]);

  const geometry = useMemo(
    () => new THREE.TubeGeometry(curve, 140, 0.015, 10, true),
    [curve],
  );

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="#2a342e" roughness={0.6} />
    </mesh>
  );
}

function BouncingBall() {
  const group = useRef<THREE.Group>(null);
  const trail = useRef<THREE.Points>(null);
  const trailPos = useMemo(() => new Float32Array(48 * 3), []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Soft bounce + lateral drift
    const bounce = Math.abs(Math.sin(t * 2.1));
    const y = -0.05 + bounce * 1.35;
    const squash = 1 - bounce * 0.12;
    const stretch = 1 + bounce * 0.08;

    group.current.position.set(
      1.45 + Math.sin(t * 0.55) * 0.35,
      y,
      Math.cos(t * 0.4) * 0.2,
    );
    group.current.scale.set(stretch, squash, stretch);
    group.current.rotation.y = t * 1.4;
    group.current.rotation.x = t * 0.7;

    if (trail.current) {
      for (let i = 47; i > 0; i--) {
        trailPos[i * 3] = trailPos[(i - 1) * 3];
        trailPos[i * 3 + 1] = trailPos[(i - 1) * 3 + 1];
        trailPos[i * 3 + 2] = trailPos[(i - 1) * 3 + 2];
      }
      trailPos[0] = group.current.position.x;
      trailPos[1] = group.current.position.y;
      trailPos[2] = group.current.position.z;
      trail.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <group ref={group} position={[1.45, 0.6, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.58, 64, 64]} />
          <meshStandardMaterial
            color="#f8c828"
            roughness={0.55}
            metalness={0.05}
            emissive="#f8c828"
            emissiveIntensity={0.12}
          />
        </mesh>
        <TennisSeam />
        <TennisSeam flip={-1} />
      </group>
      <points ref={trail}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[trailPos, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#40b068"
          size={0.06}
          transparent
          opacity={0.45}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

function Court() {
  const outlines = useMemo(
    () => [
      [
        [-3.1, 0.02, -1.7],
        [3.1, 0.02, -1.7],
        [3.1, 0.02, 1.7],
        [-3.1, 0.02, 1.7],
        [-3.1, 0.02, -1.7],
      ] as [number, number, number][],
      [
        [0, 0.02, -1.7],
        [0, 0.02, 1.7],
      ] as [number, number, number][],
      [
        [-3.1, 0.02, 0],
        [3.1, 0.02, 0],
      ] as [number, number, number][],
      [
        [-1.05, 0.02, -1.7],
        [-1.05, 0.02, 1.7],
      ] as [number, number, number][],
      [
        [1.05, 0.02, -1.7],
        [1.05, 0.02, 1.7],
      ] as [number, number, number][],
    ],
    [],
  );

  const pulse = useRef(0);
  const netRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    pulse.current = 0.35 + Math.sin(state.clock.elapsedTime * 1.5) * 0.15;
    if (netRef.current) {
      const mat = netRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = pulse.current;
    }
  });

  return (
    <group position={[0.35, -0.95, 0]} rotation={[-0.22, 0.22, 0]}>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 4]} />
        <meshStandardMaterial color="#3f8fd6" roughness={0.9} metalness={0.05} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[2.2, 3.4, 64]} />
        <meshBasicMaterial
          color="#40b068"
          transparent
          opacity={0.22}
          side={THREE.DoubleSide}
        />
      </mesh>
      {outlines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#ffffff"
          lineWidth={2}
          transparent
          opacity={0.9}
        />
      ))}
      <mesh ref={netRef} position={[0, 0.45, 0]}>
        <boxGeometry args={[0.035, 0.9, 0.035]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#40b068"
          emissiveIntensity={0.35}
        />
      </mesh>
      <mesh position={[0, 0.72, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.01, 0.01, 2.1, 8]} />
        <meshStandardMaterial color="#f4f8f6" roughness={0.35} />
      </mesh>
    </group>
  );
}

function OrbitingPips() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.35;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.2;
  });

  return (
    <group ref={group} position={[1.3, 0.7, 0]}>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const r = 1.35 + (i % 3) * 0.18;
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * r, Math.sin(a * 2) * 0.2, Math.sin(a) * r]}
          >
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#f8c828" : "#40b068"}
              emissive={i % 2 === 0 ? "#f8c828" : "#40b068"}
              emissiveIntensity={0.4}
              roughness={0.3}
            />
          </mesh>
        );
      })}
      <mesh rotation={[Math.PI / 2.2, 0.15, 0]}>
        <torusGeometry args={[1.55, 0.01, 12, 100]} />
        <meshBasicMaterial color="#40b068" transparent opacity={0.35} />
      </mesh>
      <mesh rotation={[1.1, 0.4, 0.2]}>
        <torusGeometry args={[1.95, 0.008, 12, 100]} />
        <meshBasicMaterial color="#f8c828" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function SunDisc() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.08;
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.04;
    ref.current.scale.setScalar(s);
  });

  return (
    <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.1}>
      <mesh ref={ref} position={[-2.2, 1.7, -1.5]}>
        <circleGeometry args={[0.85, 48]} />
        <meshBasicMaterial color="#f8c828" transparent opacity={0.55} />
      </mesh>
      <mesh position={[-2.2, 1.7, -1.51]}>
        <ringGeometry args={[0.95, 1.25, 48]} />
        <meshBasicMaterial
          color="#40b068"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function FloatingShards() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.children.forEach((child, i) => {
      child.position.y = 0.4 + Math.sin(t * 0.8 + i) * 0.55 + i * 0.08;
      child.rotation.x = t * 0.4 + i;
      child.rotation.y = t * 0.3 + i * 0.2;
    });
  });

  return (
    <group ref={ref}>
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh key={i} position={[-1.6 + i * 0.15, 0, -0.8 + (i % 3) * 0.2]}>
          <octahedronGeometry args={[0.08 + (i % 3) * 0.02, 0]} />
          <meshStandardMaterial
            color={i % 2 ? "#40b068" : "#f8c828"}
            roughness={0.25}
            metalness={0.35}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneEffects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={0.45}
        luminanceThreshold={0.55}
        luminanceSmoothing={0.8}
        mipmapBlur
      />
      <HueSaturation saturation={0.08} />
    </EffectComposer>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#eaf3f8"]} />
      <fog attach="fog" args={["#eaf3f8", 8, 18]} />
      <ambientLight intensity={0.85} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.6}
        color="#fff7e0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3, 3, 2]} intensity={0.9} color="#7ad09a" />
      <pointLight position={[3, 2, 1]} intensity={1.1} color="#f8c828" />
      <hemisphereLight args={["#dceaf8", "#e7f1eb", 0.65]} />

      <Sparkles
        count={45}
        scale={[9, 4, 4]}
        size={2.2}
        speed={0.45}
        opacity={0.55}
        color="#40b068"
      />

      <Court />
      <BouncingBall />
      <OrbitingPips />
      <SunDisc />
      <FloatingShards />
      <ContactShadows
        position={[0.3, -0.94, 0]}
        opacity={0.35}
        scale={10}
        blur={2.5}
        far={4}
        color="#1a3a55"
      />
      <CameraRig />
      <SceneEffects />
    </>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      className="h-full w-full touch-none"
      dpr={[1, 1.75]}
      shadows
      camera={{ position: [0.2, 1.35, 5.4], fov: 40, near: 0.1, far: 40 }}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#eaf3f8");
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.15;
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
