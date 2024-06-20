import * as React from "react";
const SvgIconMessages = (props) => (
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
      d="M17.25 14.25h3.002a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1H8.002a1 1 0 0 0-1 1v3m9.25 0h-12.5a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h2.25v2.5l4.5-2.5h5.75a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgIconMessages;
