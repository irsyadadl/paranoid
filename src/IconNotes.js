import * as React from "react";
const SvgIconNotes = (props) => (
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
      d="M3.25 12h2m4.5 0h2.5m-2.5-3.75h4.5m-11 0h2m-2 7.5h2m0 5h13.5a1 1 0 0 0 1-1V4.25a1 1 0 0 0-1-1H5.25a1 1 0 0 0-1 1v15.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconNotes;
