import * as React from "react";
const SvgIconFinder = (props) => (
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
      d="M13.25 13.25h-2c.19-3.254.718-6.381 1.567-9.5M7.75 15.5c3.25 2.25 5.25 2.25 8.5 0m-8.5-6.75v1.5m8.5-1.5v1.5m-3.433-6.5H5.75a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h12.5a2 2 0 0 0 2-2V5.75a2 2 0 0 0-2-2z"
    />
  </svg>
);
export default SvgIconFinder;
