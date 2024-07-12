import * as React from "react";
const SvgIconSortDesc = (props) => (
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
      d="M3.75 5.75h14.5M3.75 12h7.5m-7.5 6.25h5.5m8.75-7.5v7.75m-3.25-2.75L18 19l3.25-3.25"
    />
  </svg>
);
export default SvgIconSortDesc;
