import * as React from "react";
const SvgIconHome3 = (props) => (
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
      d="M3.75 7.328a1 1 0 0 1 .501-.867l7.25-4.174a1 1 0 0 1 .998 0l7.25 4.174a1 1 0 0 1 .501.867V19.25a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default SvgIconHome3;
