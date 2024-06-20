import * as React from "react";
const SvgIconEyeOffFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.22 2.22a.75.75 0 0 1 1.06 0l3.758 3.757.023.022 3.165 3.165-.017-.016.047.047-.016-.017 4.582 4.582-.017-.016.047.047-.016-.017 3.165 3.165.022.023 3.757 3.758a.75.75 0 1 1-1.06 1.06l-3.35-3.349c-2.582 1.592-5.503 1.98-8.265 1.13-2.944-.907-5.632-3.195-7.536-6.763a1.7 1.7 0 0 1-.001-1.595c1.06-1.988 2.363-3.578 3.82-4.754L2.22 3.28a.75.75 0 0 1 0-1.06M8 12c0-.833.256-1.608.691-2.248l1.092 1.092a2.5 2.5 0 0 0 3.373 3.373l1.092 1.092A4 4 0 0 1 8 11.999Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M22.43 12.8c-.782 1.466-1.697 2.715-2.707 3.741L8.021 4.84A9.95 9.95 0 0 1 12 4c4.01 0 7.91 2.477 10.43 7.2a1.71 1.71 0 0 1 0 1.6"
    />
  </svg>
);
export default SvgIconEyeOffFill;
