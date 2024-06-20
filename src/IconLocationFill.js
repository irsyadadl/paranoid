import * as React from "react";
const SvgIconLocationFill = (props) => (
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
      d="M4 10a8 8 0 1 1 16 0c0 2.752-1.352 5.296-2.848 7.28-1.505 1.998-3.224 3.52-4.104 4.242a1.64 1.64 0 0 1-2.096 0c-.88-.722-2.599-2.244-4.104-4.241C5.352 15.296 4 12.75 4 10m4.875 0a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconLocationFill;
