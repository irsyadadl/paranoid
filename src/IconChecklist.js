import * as React from "react";
const SvgIconChecklist = (props) => (
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
      d="M11.75 16.25h8.5m-8.5-8.5h8.5m-16.5.875L5.417 9.75l3.333-4.5m-5 12.375 1.667 1.125 3.333-4.5"
    />
  </svg>
);
export default SvgIconChecklist;
