import * as React from "react";
const SvgIconListBullets = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 12a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0h-1m1-4.25a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0h-1m1 8.5a.5.5 0 0 1-1 0m1 0a.5.5 0 0 0-1 0m1 0h-1m-1.5 4h12.5a2 2 0 0 0 2-2V5.75a2 2 0 0 0-2-2H5.75a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2Z"
    />
  </svg>
);
export default SvgIconListBullets;
