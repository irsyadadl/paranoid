import * as React from "react";
const SvgIconDiamondFill = (props) => (
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
      d="M6.564 3.523A1.75 1.75 0 0 1 7.812 3h8.376c.47 0 .919.189 1.248.523l5.154 5.244a1.75 1.75 0 0 1-.01 2.464l-9.343 9.342a1.75 1.75 0 0 1-2.475 0l-9.341-9.342a1.75 1.75 0 0 1-.011-2.464zM9.03 7.22a.75.75 0 0 1 0 1.06L7.31 10l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.25-2.25a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDiamondFill;
