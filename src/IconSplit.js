import * as React from "react";
const SvgIconSplit = (props) => (
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
      d="M12 2.75v18.5M8.25 4.75h-4.5a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h4.5m7.5 0h4.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1h-4.5"
    />
  </svg>
);
export default SvgIconSplit;
