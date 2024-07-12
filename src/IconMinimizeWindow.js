import * as React from "react";
const SvgIconMinimizeWindow = (props) => (
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
      d="M3.75 10.25v-5.5a1 1 0 0 1 1-1h15.5a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-5.5m-1-4v-3m0 3h3m-3 0L17 8m-6.75 13.25h-6.5a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgIconMinimizeWindow;
