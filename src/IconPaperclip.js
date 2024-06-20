import * as React from "react";
const SvgIconPaperclip = (props) => (
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
      strokeWidth={1.5}
      d="M5.75 10.75v4.5a6 6 0 0 0 6 6h.5a6 6 0 0 0 6-6V7a4.25 4.25 0 0 0-8.5 0v7.875a2.125 2.125 0 0 0 4.25 0V7.75"
    />
  </svg>
);
export default SvgIconPaperclip;
