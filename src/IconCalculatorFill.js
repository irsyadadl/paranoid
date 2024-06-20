import * as React from "react";
const SvgIconCalculatorFill = (props) => (
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
      d="M5.75 2A1.75 1.75 0 0 0 4 3.75v16.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.25V3.75A1.75 1.75 0 0 0 18.25 2zM18.5 7V3.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V7zm-9 6.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6-5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCalculatorFill;
