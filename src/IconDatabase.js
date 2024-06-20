import * as React from "react";
const SvgIconDatabase = (props) => (
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
      d="M19.25 5.32c0 1.419-3.246 2.569-7.25 2.569s-7.25-1.15-7.25-2.57m14.5 0C19.25 3.9 16.004 2.75 12 2.75S4.75 3.9 4.75 5.32m14.5 0v13.36c0 1.42-3.246 2.57-7.25 2.57s-7.25-1.15-7.25-2.57V5.32M19.25 12c0 1.38-3.246 2.5-7.25 2.5S4.75 13.38 4.75 12"
    />
  </svg>
);
export default SvgIconDatabase;
