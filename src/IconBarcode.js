import * as React from "react";
const SvgIconBarcode = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.25 4.75h-3.5a1 1 0 0 0-1 1v3.5m14-4.5h3.5a1 1 0 0 1 1 1v3.5m0 5.5v3.5a1 1 0 0 1-1 1h-3.5m-9.5 0h-3.5a1 1 0 0 1-1-1v-3.5m5-5v4.5m8.5-4.5v4.5M12 9.75v2.5"
    />
  </svg>
);
export default SvgIconBarcode;
