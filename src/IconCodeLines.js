import * as React from "react";
const SvgIconCodeLines = (props) => (
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
      d="M2.75 4.75H13.2m4.55 0h3.5M2.75 12h5.5m4.5 0h8.5m-18.5 7.25h7.5m4.5 0h6.5"
    />
  </svg>
);
export default SvgIconCodeLines;
