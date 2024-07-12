import * as React from "react";
const SvgIconUsbFill = (props) => (
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
      d="M10.75 5.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM14 5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 14 5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.75 2a.75.75 0 0 0-.75.75V9.5H3.75a.75.75 0 0 0-.75.75v10c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 20.25v-10a.75.75 0 0 0-.75-.75H19V2.75a.75.75 0 0 0-.75-.75zM17.5 9.5v-6h-11v6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconUsbFill;
