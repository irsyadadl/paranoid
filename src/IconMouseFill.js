import * as React from "react";
const SvgIconMouseFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0zm7.75-2.25a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMouseFill;
