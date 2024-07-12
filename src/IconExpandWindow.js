import * as React from "react";
const SvgIconExpandWindow = (props) => (
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
      d="M3.75 10.25v-5.5a1 1 0 0 1 1-1h15.5a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1h-5.5m2.5-7.5v3m0-3h-3m3 0L14 11m-3.75 10.25h-6.5a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1h6.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1"
    />
  </svg>
);
export default SvgIconExpandWindow;
