import * as React from "react";
const SvgIconSuitcase = (props) => (
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
      d="M8.75 5.75h-4a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h2m2-14.5v-2a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v2m-6.5 0h6.5m0 0h4a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1h-2m-10.5 0v1m0-1h10.5m0 0v1m-8.5-11.5v6.5m6.5-6.5v6.5"
    />
  </svg>
);
export default SvgIconSuitcase;
