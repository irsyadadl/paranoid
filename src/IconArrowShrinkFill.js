import * as React from "react";
const SvgIconArrowShrinkFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3.22 3.22a.75.75 0 0 1 1.06 0L9.5 8.44V3.75a.75.75 0 0 1 1.5 0v6.5a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1 0-1.5h4.69L3.22 4.28a.75.75 0 0 1 0-1.06M13 13.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-4.69l5.22 5.22a.75.75 0 1 1-1.06 1.06l-5.22-5.22v4.69a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArrowShrinkFill;
