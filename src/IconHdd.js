import * as React from "react";
const SvgIconHdd = (props) => (
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
      d="M4.75 17v-1.25a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1V17m0 0V3.75a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v16.5a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={0.5}
      d="M15.25 18a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-3 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
    />
  </svg>
);
export default SvgIconHdd;
