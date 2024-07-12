import * as React from "react";
const SvgIconRotateLeft = (props) => (
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
      d="M4.24 14.75a8.25 8.25 0 1 0 7.78-11c-2.816 0-4.7 1.204-6.52 3.259M4.75 4v3.5a.5.5 0 0 0 .5.5h3.5"
    />
  </svg>
);
export default SvgIconRotateLeft;
