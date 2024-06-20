import * as React from "react";
const SvgIconStore3 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 19.25h-4a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1h-4m-8.5 0v-7.5a1 1 0 0 1 1-1H12m-4.25 8.5H12m4.25 0v-7.5a1 1 0 0 0-1-1H12m4.25 8.5H12m0-8.5v8.5"
    />
  </svg>
);
export default SvgIconStore3;
