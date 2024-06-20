import * as React from "react";
const SvgIconArrowShrink = (props) => (
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
      d="M10.25 3.75v6.5m0 0h-6.5m6.5 0-6.5-6.5m10 16.5v-6.5m0 0h6.5m-6.5 0 6.5 6.5"
    />
  </svg>
);
export default SvgIconArrowShrink;
