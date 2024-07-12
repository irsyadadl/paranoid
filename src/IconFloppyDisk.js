import * as React from "react";
const SvgIconFloppyDisk = (props) => (
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
      d="M7.75 3.75v3.5a1 1 0 0 0 1 1h6.5a1 1 0 0 0 1-1v-3.5m4 3.414V19.25a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h12.086a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 1 .293.707M7.75 13.75v5.5a1 1 0 0 0 1 1h6.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1h-6.5a1 1 0 0 0-1 1"
    />
  </svg>
);
export default SvgIconFloppyDisk;
