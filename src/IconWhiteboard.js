import * as React from "react";
const SvgIconWhiteboard = (props) => (
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
      d="M16 18.25h4.25a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H12m4 13.5 1 3m-1-3h-4m-4 0H3.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1H12m-4 13.5-1 3m1-3h4m0-13.5v-2m0 15.5v2"
    />
  </svg>
);
export default SvgIconWhiteboard;
