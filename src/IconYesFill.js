import * as React from "react";
const SvgIconYesFill = (props) => (
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
      d="M11.611 2c-.654 0-1.256.365-1.557.949L6.421 10H3.75A1.75 1.75 0 0 0 2 11.75v7.5c0 .966.784 1.75 1.75 1.75h13.672a3.75 3.75 0 0 0 3.707-3.186l.837-5.5A3.75 3.75 0 0 0 18.26 8h-4.367l.44-2.826A2.753 2.753 0 0 0 11.612 2ZM6 11.5v8H3.75a.25.25 0 0 1-.25-.25v-7.5a.25.25 0 0 1 .25-.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconYesFill;
