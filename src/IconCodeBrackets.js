import * as React from "react";
const SvgIconCodeBrackets = (props) => (
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
      d="m9.75 20.25 4.5-16.5m4 4 3.355 3.565a1 1 0 0 1 0 1.37L18.25 16.25m-12.5 0-3.355-3.565a1 1 0 0 1 0-1.37L5.75 7.75"
    />
  </svg>
);
export default SvgIconCodeBrackets;
