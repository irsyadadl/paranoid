import * as React from "react";
const SvgIconCalendar = (props) => (
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
      d="M3.75 9.75h16.5m-12.5-5v-2m8.5 2v-2m-11.5 17.5h14.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v13.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconCalendar;
