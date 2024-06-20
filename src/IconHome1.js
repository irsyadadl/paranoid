import * as React from "react";
const SvgIconHome1 = (props) => (
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
      d="M9.5 16.75v3.5H4.75a1 1 0 0 1-1-1V9.447a1 1 0 0 1 .452-.837l7.25-4.75a1 1 0 0 1 1.096 0l7.25 4.75a1 1 0 0 1 .452.837v9.803a1 1 0 0 1-1 1H14.5v-3.5a2.5 2.5 0 0 0-5 0Z"
    />
  </svg>
);
export default SvgIconHome1;
