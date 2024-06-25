import { SVGProps } from "react";

export function Box(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28 21.333V10.667a2.666 2.666 0 00-1.333-2.307l-9.334-5.333a2.666 2.666 0 00-2.666 0L5.333 8.36A2.667 2.667 0 004 10.667v10.666a2.667 2.667 0 001.333 2.307l9.334 5.333a2.667 2.667 0 002.666 0l9.334-5.333A2.667 2.667 0 0028 21.333z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.36 9.28L16 16.013 27.64 9.28M16 29.44V16"
      ></path>
    </svg>
  );
}
