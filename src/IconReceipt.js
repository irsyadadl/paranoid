import * as React from "react";
const SvgIconReceipt = (props) => (
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
      d="M8.75 14.75h6.5M9.875 9.5l1.583 1.583 3.167-3.166M5.75 2.75h12.5a1 1 0 0 1 1 1v17.5L16.667 19l-2.334 2.25L12 19l-2.333 2.25L7.333 19 4.75 21.25V3.75a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconReceipt;
