import * as React from "react";
const SvgIconFullscreen = (props) => (
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
      d="M8.25 3.75h-3.5a1 1 0 0 0-1 1v3.5m12-4.5h3.5a1 1 0 0 1 1 1v3.5m0 7.5v3.5a1 1 0 0 1-1 1h-3.5m-7.5 0h-3.5a1 1 0 0 1-1-1v-3.5"
    />
  </svg>
);
export default SvgIconFullscreen;
