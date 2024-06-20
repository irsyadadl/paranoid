import * as React from "react";
const SvgIconInbox2 = (props) => (
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
      d="M3.75 12.75h4.32a4.001 4.001 0 0 0 7.86 0h4.32m-1 7.5H4.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h14.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1Z"
    />
  </svg>
);
export default SvgIconInbox2;
