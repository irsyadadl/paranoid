import * as React from "react";
const SvgIconCalendarClock = (props) => (
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
      d="M8.75 20.25h-4a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1h14.5a1 1 0 0 1 1 1v3m-12.5-4v-2m8.5 2v-2m.75 12V17l1.75 1.75m-3.758-6.6a5.248 5.248 0 1 1 4.016 9.699 5.248 5.248 0 0 1-4.016-9.698Z"
    />
  </svg>
);
export default SvgIconCalendarClock;
