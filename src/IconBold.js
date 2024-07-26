import * as React from "react";
const SvgIconBold = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.74 12.75h7.51a4 4 0 0 0 4-4V8.5a4 4 0 0 0-4-4H6.74a1 1 0 0 0-1 1zm0 0V20a1 1 0 0 0 1 1h5.76m.5 0h1.25a4 4 0 0 0 4-4v-.25a4 4 0 0 0-4-4H13"
    />
  </svg>
);
export default SvgIconBold;
