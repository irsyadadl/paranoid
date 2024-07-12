import * as React from "react";
const SvgIconExpandSimple = (props) => (
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
      d="M5.75 12.75v5.5h5.5m1.5-12.5h5.5v5.5"
    />
  </svg>
);
export default SvgIconExpandSimple;
