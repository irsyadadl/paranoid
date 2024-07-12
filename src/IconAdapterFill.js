import * as React from "react";
const SvgIconAdapterFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.5 2.75a.75.75 0 0 0-1.5 0V5.5H5.75A1.75 1.75 0 0 0 4 7.25v7A4.75 4.75 0 0 0 8.75 19h2.5v2.25a.75.75 0 0 0 1.5 0V19h2.5A4.75 4.75 0 0 0 20 14.25v-7a1.75 1.75 0 0 0-1.75-1.75H16V2.75a.75.75 0 0 0-1.5 0V5.5h-5z"
    />
  </svg>
);
export default SvgIconAdapterFill;
