import * as React from "react";
const SvgIconCircleArrowLeft = (props) => (
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
      d="M11 15.25 7.75 12 11 8.75M16.25 12H8.5m-5.75 0a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
    />
  </svg>
);
export default SvgIconCircleArrowLeft;
