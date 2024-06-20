import * as React from "react";
const SvgIconTicket = (props) => (
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
      d="M15.25 7.75v.5m0 3.5v.5m0 3.5v.5M3.75 4.75h16.5a1 1 0 0 1 1 1v3.5c-2.75.75-2.75 4.75 0 5.5v3.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1v-3.5C5.5 14 5.5 10 2.75 9.25v-3.5a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconTicket;
