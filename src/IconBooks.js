import * as React from "react";
const SvgIconBooks = (props) => (
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
      d="M7.5 20.5v-15h-5v15zm0 0h6v-17h-6zm0-13h6m-6 9h6m.5-9 4.347-1.165 3.494 13.04-4.347 1.165z"
    />
  </svg>
);
export default SvgIconBooks;
