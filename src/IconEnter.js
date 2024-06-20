import * as React from "react";
const SvgIconEnter = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.25 4.75v9.5a1 1 0 0 1-1 1H4.75m3-4-4 4 4 4"
    />
  </svg>
);
export default SvgIconEnter;
