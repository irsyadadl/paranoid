import * as React from "react";
const SvgIconClipboard = (props) => (
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
      d="M15.25 4.75h3a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1h3m1 2.5h4.5a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1h-4.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1Z"
    />
  </svg>
);
export default SvgIconClipboard;
