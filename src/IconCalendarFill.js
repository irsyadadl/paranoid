import * as React from "react";
const SvgIconCalendarFill = (props) => (
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
      d="M7.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h2.25c.966 0 1.75.784 1.75 1.75V9H3V5.75C3 4.784 3.784 4 4.75 4H7V2.75A.75.75 0 0 1 7.75 2M3 10.5v8.75c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 19.25V10.5z"
    />
  </svg>
);
export default SvgIconCalendarFill;
