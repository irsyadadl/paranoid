import * as React from "react";
const SvgIconSdCard = (props) => (
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
      d="M9.25 6.75v2.5m3.5-2.5v2.5m-7-6.5h10.5a1 1 0 0 1 1 1v3.434a2 2 0 0 0 .297 1.048l1.406 2.286a2 2 0 0 1 .297 1.048v8.684a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1V3.75a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconSdCard;
