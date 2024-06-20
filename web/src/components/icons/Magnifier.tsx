import { SVGProps } from "react";

export function Magnifier(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 21"
      {...props}
    >
      <circle
        cx="9.767"
        cy="9.767"
        r="8.989"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.018 16.485L19.542 20"
      ></path>
    </svg>
  );
}
