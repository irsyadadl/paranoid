import * as React from "react";
const SvgIconActionCam = (props) => (
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
      d="M6.75 16.25h2.5m.5-11.5h-6a1 1 0 0 0-1 1v13.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-3m-7.5-2.997h6.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1h-6.5a1 1 0 0 0-1 1v6.503a1 1 0 0 0 1 1"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17 9v-.01m.25.01a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
    />
  </svg>
);
export default SvgIconActionCam;
