import * as React from "react";
const SvgIconNotepad = (props) => (
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
      d="M7.75 3.278h-2.5a1 1 0 0 0-1 1V19.75a1 1 0 0 0 1 1h13.5a1 1 0 0 0 1-1V4.278a1 1 0 0 0-1-1h-2.5m-8.5 0H12m-4.25 0v.972m0-.972V2.25M12 3.278h4.25m-4.25 0v.972m0-.972V2.25m4.25 1.028v.972m0-.972V2.25m-7.5 7.5h6.5m-6.5 4h4.5"
    />
  </svg>
);
export default SvgIconNotepad;
