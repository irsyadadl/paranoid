import * as React from "react";
const SvgIconComputerFill = (props) => (
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
      d="M3.75 3A1.75 1.75 0 0 0 2 4.75v7.75h20V4.75A1.75 1.75 0 0 0 20.25 3z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 16.25V14h20v2.25A1.75 1.75 0 0 1 20.25 18H15v3.25a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75V18H3.75A1.75 1.75 0 0 1 2 16.25M10.5 18v2.5h3V18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconComputerFill;
