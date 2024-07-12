import * as React from "react";
const SvgIconPuzzle = (props) => (
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
      d="M3.75 5.75a1 1 0 0 1 1-1h4.5V4.5a2.75 2.75 0 1 1 5.5 0v.25h4.5a1 1 0 0 1 1 1v3.5H20a2.75 2.75 0 1 0 0 5.5h.25v3.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1z"
    />
  </svg>
);
export default SvgIconPuzzle;
