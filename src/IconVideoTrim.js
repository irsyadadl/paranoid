import * as React from "react";
const SvgIconVideoTrim = (props) => (
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
      d="M15.25 2.75v2m0 0v14.5m0-14.5H3.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h11.5m0 0v2m3.5-2h1.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1h-1.5M8.25 12H9m-.75 0v-.25m0 .25v.25M7.5 9.5v5l3.25-2.5z"
    />
  </svg>
);
export default SvgIconVideoTrim;
