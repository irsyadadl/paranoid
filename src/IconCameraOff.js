import * as React from "react";
const SvgIconCameraOff = (props) => (
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
      d="M9.75 3.75h4.215a1 1 0 0 1 .832.445l1.406 2.11a1 1 0 0 0 .832.445h3.215a1 1 0 0 1 1 1v8.5M2.75 2.75l4 4m0 0h-3a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1h16.5M6.75 6.75l13.5 13.5m0 0 1 1M14.562 15A3.25 3.25 0 1 1 10 10.438"
    />
  </svg>
);
export default SvgIconCameraOff;
