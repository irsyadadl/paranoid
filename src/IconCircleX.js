import * as React from "react";
const SvgIconCircleX = (props) => (
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
      strokeWidth={1.5}
      d="m15 9-6 6m6 0L9 9m12.25 3a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z"
    />
  </svg>
);
export default SvgIconCircleX;
