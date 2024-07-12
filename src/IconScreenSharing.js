import * as React from "react";
const SvgIconScreenSharing = (props) => (
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
      d="m9 11.25 3-3 3 3m-3 4.5V9.5m-8.25 9.75h16.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconScreenSharing;
