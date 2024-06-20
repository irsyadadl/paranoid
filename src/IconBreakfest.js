import * as React from "react";
const SvgIconBreakfest = (props) => (
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
      d="M19.25 12.26c1.252-.895 2-2.028 2-3.26 0-2.9-4.141-5.25-9.25-5.25S2.75 6.1 2.75 9c0 1.232.748 2.365 2 3.26v6.99a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1z"
    />
  </svg>
);
export default SvgIconBreakfest;
