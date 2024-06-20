import * as React from "react";
const SvgIconChart3 = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 20.25v-6.5h-5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5zm0 0h5.5m-5.5 0v-16a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 .5.5v16m0 0h5a.5.5 0 0 0 .5-.5V9.25a.5.5 0 0 0-.5-.5h-5z"
    />
  </svg>
);
export default SvgIconChart3;
