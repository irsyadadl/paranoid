import * as React from "react";
const SvgIconClapperboard = (props) => (
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
      d="M2.75 9.75h18.5m-18.5 0v8.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-8.5m-18.5 0v-4a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v4M12.45 5l-.9 4.5M17.187 5l-1.125 4.5M7.95 5l-.9 4.5"
    />
  </svg>
);
export default SvgIconClapperboard;
