import * as React from "react";
const SvgIconVideoCamOff = (props) => (
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
      d="M7.75 4.75h6.5a1 1 0 0 1 1 1v7.75M3.089 5a1 1 0 0 0-.339.75v12.5a1 1 0 0 0 1 1h10.5c.142 0 .276-.03.398-.082M2 3l14.5 18.5m4.026-14.138L15.25 10v4l5.276 2.638a.5.5 0 0 0 .724-.447V7.809a.5.5 0 0 0-.724-.447"
    />
  </svg>
);
export default SvgIconVideoCamOff;
