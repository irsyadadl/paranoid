import * as React from "react";
const SvgIconCrop = (props) => (
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
      strokeWidth={1.5}
      d="M2.75 5.75h14.5a1 1 0 0 1 1 1v14.5M5.75 2.75v14.5a1 1 0 0 0 1 1h14.5"
    />
  </svg>
);
export default SvgIconCrop;
