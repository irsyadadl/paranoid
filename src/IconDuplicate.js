import * as React from "react";
const SvgIconDuplicate = (props) => (
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
      d="M7.75 7.75v-3a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v10.51a1 1 0 0 1-1 1h-3M3.75 8.75v10.5a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1V8.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1"
    />
  </svg>
);
export default SvgIconDuplicate;
