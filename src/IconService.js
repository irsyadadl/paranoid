import * as React from "react";
const SvgIconService = (props) => (
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
      d="M14.57 16.111a6.68 6.68 0 0 0 6.31-8.88l-2.713 2.713a2.907 2.907 0 1 1-4.111-4.11l2.713-2.714A6.68 6.68 0 0 0 8.401 12l-5.436 5.523a1 1 0 0 0 .025 1.428l2.246 2.125a1 1 0 0 0 1.4-.025L12 15.599a6.7 6.7 0 0 0 2.57.512Z"
    />
  </svg>
);
export default SvgIconService;
