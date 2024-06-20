import * as React from "react";
const SvgIconPause = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 4.75a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1zm10 0a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1z"
    />
  </svg>
);
export default SvgIconPause;
