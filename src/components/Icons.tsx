import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3.5v4M16 3.5v4" />
      <path d="M8.5 14h.5M12 14h.5M15.5 14h.5M8.5 17h.5M12 17h.5" />
    </Svg>
  );
}

export function IconPlayers(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M7.2 5.4c3.4 2.6 3.4 10.6 0 13.2" />
      <path d="M16.8 5.4c-3.4 2.6-3.4 10.6 0 13.2" />
    </Svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s6.5-5.6 6.5-10.2a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </Svg>
  );
}

export function IconClub(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 20V9.2L12 4l8 5.2V20" />
      <path d="M9 20v-6h6v6" />
      <path d="M4 20h16" />
    </Svg>
  );
}

export function IconTrophy(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 4h8v3.2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V4z" />
      <path d="M8 6.2H5.5A2.5 2.5 0 0 0 8 8.6" />
      <path d="M16 6.2h2.5A2.5 2.5 0 0 1 16 8.6" />
      <path d="M12 11.2V15" />
      <path d="M9 20h6M10.5 15h3L14 20h-4l.5-5z" />
    </Svg>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5 13.6 9l5.9 1.6-5.9 1.6L12 17.7l-1.6-5.5L4.5 10.6 10.4 9z" />
      <path d="M18.5 15.5 19.3 18l2.5.7-2.5.7-.8 2.5-.8-2.5-2.5-.7 2.5-.7z" />
    </Svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" />
      <path d="m4.2 7.2 7.8 6.2 7.8-6.2" />
    </Svg>
  );
}
