import * as React from "react";
const SvgIconNext = (props) => (
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
      d="M19.25 4.75v14.5m-13.725-.012 10.342-6.82a.5.5 0 0 0 0-.836L5.525 4.762a.5.5 0 0 0-.775.417V18.82a.5.5 0 0 0 .775.417Z"
    />
  </svg>
);
export default SvgIconNext;
