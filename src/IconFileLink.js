import * as React from "react";
const SvgIconFileLink = (props) => (
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
      d="M4.75 8.75v-5a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l5.914 5.914a1 1 0 0 1 .293.707V20.25a1 1 0 0 1-1 1h-6.5m1-18v5a1 1 0 0 0 1 1h5M2.75 18a3.25 3.25 0 0 0 6.5 0m0-3a3.25 3.25 0 0 0-6.5 0m3.25.75v1.5"
    />
  </svg>
);
export default SvgIconFileLink;
