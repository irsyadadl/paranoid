import * as React from "react";
const SvgIconArrowPathDown = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.25 2.75h-4.5a1 1 0 0 0-1 1v10H5.34a.5.5 0 0 0-.379.826l6.281 7.294a1 1 0 0 0 1.516 0l6.28-7.294a.5.5 0 0 0-.378-.826h-3.41v-10a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgIconArrowPathDown;
