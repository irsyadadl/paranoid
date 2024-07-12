import * as React from "react";
const SvgIconPrinterFill = (props) => (
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
      d="M7.75 2A1.75 1.75 0 0 0 6 3.75V6H3.75A1.75 1.75 0 0 0 2 7.75v8.5c0 .966.784 1.75 1.75 1.75H6v2.25c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 18 20.25V18h2.25A1.75 1.75 0 0 0 22 16.25v-8.5A1.75 1.75 0 0 0 20.25 6H18V3.75A1.75 1.75 0 0 0 16.25 2zm8.75 4V3.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25V6zm0 8.5h-9v5.75c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25zM6 10.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconPrinterFill;
