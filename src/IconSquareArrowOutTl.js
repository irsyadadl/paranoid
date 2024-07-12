import * as React from "react";
const SvgIconSquareArrowOutTl = (props) => (
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
      d="M13.75 6.75h6.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H7.75a1 1 0 0 1-1-1v-6.5m-3-3.5v-6a.5.5 0 0 1 .5-.5h6m-5.5 1 5.5 5.5"
    />
  </svg>
);
export default SvgIconSquareArrowOutTl;
