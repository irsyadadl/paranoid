import * as React from "react";
const SvgIconZip = (props) => (
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
      d="M6.25 3.75h-1.5a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h14.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1h-1.5m-8 0h4.5m-4.5 4h4.5m-4.5 4h4.5V14a2.25 2.25 0 0 1-4.5 0z"
    />
  </svg>
);
export default SvgIconZip;
