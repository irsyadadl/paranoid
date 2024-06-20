import * as React from "react";
const SvgIconFilter = (props) => (
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
      d="M19.25 3.75H4.75a1 1 0 0 0-1 1v2.836a1 1 0 0 0 .293.707l5.414 5.414a1 1 0 0 1 .293.707v6.836l4.5-1.25v-5.586a1 1 0 0 1 .293-.707l5.414-5.414a1 1 0 0 0 .293-.707V4.75a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgIconFilter;
