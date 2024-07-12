import * as React from "react";
const SvgIconArrowPathLeft = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 14.25v-4.5a1 1 0 0 0-1-1h-10V5.34a.5.5 0 0 0-.826-.379L2.13 11.242a1 1 0 0 0 0 1.516l7.294 6.28a.5.5 0 0 0 .826-.378v-3.41h10a1 1 0 0 0 1-1Z"
    />
  </svg>
);
export default SvgIconArrowPathLeft;
