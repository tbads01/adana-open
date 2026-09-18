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
