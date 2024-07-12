import * as React from "react";
const SvgIconArrowUpRight = (props) => (
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
      d="M18.25 15.25v-9.5m0 0h-9.5m9.5 0L6 18"
    />
  </svg>
);
export default SvgIconArrowUpRight;
