import * as React from "react";
const SvgIconMicFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M7 7a5 5 0 0 1 10 0v4.5a5 5 0 0 1-10 0z" />
    <path
      fill="currentColor"
      d="M5.811 14.2a.75.75 0 1 0-1.374.6 8.26 8.26 0 0 0 6.813 4.916v1.534a.75.75 0 1 0 1.5 0v-1.534a8.26 8.26 0 0 0 6.813-4.916.75.75 0 1 0-1.374-.6 6.752 6.752 0 0 1-12.378 0"
    />
  </svg>
);
export default SvgIconMicFill;
