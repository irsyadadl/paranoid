import * as React from "react";
const SvgIconCompass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.466 17.153a1 1 0 0 0 .686-.687l3.6-12.6a.5.5 0 0 0-.617-.619l-12.6 3.6a1 1 0 0 0-.688.687l-3.6 12.6a.5.5 0 0 0 .618.619z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgIconCompass;
