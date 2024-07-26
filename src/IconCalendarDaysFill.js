import * as React from "react";
const SvgIconCalendarDaysFill = (props) => (
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
      fillRule="evenodd"
      d="M3.75 3a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75zM8 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4.5-7.5h-15V7h15z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCalendarDaysFill;
