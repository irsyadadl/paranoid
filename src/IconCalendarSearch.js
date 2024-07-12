import * as React from "react";
const SvgIconCalendarSearch = (props) => (
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
      d="M7.75 4.75v-2m8.5 2v-2M14 14.25l1.25 1.25m-10.5 4.75h14.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v13.5a1 1 0 0 0 1 1m10-8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgIconCalendarSearch;
