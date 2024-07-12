import * as React from "react";
const SvgIconCloseQuote = (props) => (
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
      d="M9.25 4.75h-5.5a1 1 0 0 0-1 1v6.286a1 1 0 0 0 1 1h2.5v6.214s4-1.554 4-6.214V5.748a1 1 0 0 0-1-.998Zm11 0h-5.5a1 1 0 0 0-1 1v6.286a1 1 0 0 0 1 1h2.5v6.214s4-1.554 4-6.214V5.748a1 1 0 0 0-1-.998Z"
    />
  </svg>
);
export default SvgIconCloseQuote;
