import * as React from "react";
const SvgIconContacts = (props) => (
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
      d="M19.25 21.25H5.75a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h13.5v-16H5.75a1 1 0 0 0-1 1V20M11.5 9.25h1m-2.75 4.5s0-1.5 2.25-1.5 2.25 1.5 2.25 1.5zM13 9.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgIconContacts;
