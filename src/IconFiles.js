import * as React from "react";
const SvgIconFiles = (props) => (
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
      d="M17.25 18.25v2a1 1 0 0 1-1 1H5.75a1 1 0 0 1-1-1V6.75a1 1 0 0 1 1-1h2m7.5-3h-6.5a1 1 0 0 0-1 1v13.5a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1v-9.5m-5-5 5 5m-5-5v4a1 1 0 0 0 1 1h4"
    />
  </svg>
);
export default SvgIconFiles;
