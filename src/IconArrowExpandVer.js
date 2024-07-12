import * as React from "react";
const SvgIconArrowExpandVer = (props) => (
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
      d="M7.75 7 12 2.75 16.25 7m-8.5 10L12 21.25 16.25 17M12 20V4"
    />
  </svg>
);
export default SvgIconArrowExpandVer;
