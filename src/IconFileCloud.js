import * as React from "react";
const SvgIconFileCloud = (props) => (
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
      d="M4.75 12.25v-8.5a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l5.914 5.914a1 1 0 0 1 .293.707V20.25a1 1 0 0 1-1 1h-5m-.5-18v5a1 1 0 0 0 1 1h5m-13 12a3 3 0 1 1 2.601-4.495A2.25 2.25 0 1 1 8.5 21.25z"
    />
  </svg>
);
export default SvgIconFileCloud;
