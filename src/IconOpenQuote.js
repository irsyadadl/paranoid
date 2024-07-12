import * as React from "react";
const SvgIconOpenQuote = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.75 19.25h5.5a1 1 0 0 0 1-1v-6.286a1 1 0 0 0-1-1h-2.5V4.75s-4 1.554-4 6.214v7.288c0 .552.448.998 1 .998Zm-11 0h5.5a1 1 0 0 0 1-1v-6.286a1 1 0 0 0-1-1h-2.5V4.75s-4 1.554-4 6.214v7.288c0 .552.448.998 1 .998Z"
    />
  </svg>
);
export default SvgIconOpenQuote;
