import * as React from "react";
const SvgIconItalic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 4.5h4.75m4.75 0H14.5m0 0L9.5 21m0 0H4.75m4.75 0h4.76"
    />
  </svg>
);
export default SvgIconItalic;
