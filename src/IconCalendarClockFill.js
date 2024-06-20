import * as React from "react";
const SvgIconCalendarClockFill = (props) => (
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
      d="M7.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h2.25c.966 0 1.75.784 1.75 1.75v4.907A7.5 7.5 0 0 0 10.656 21H4.75A1.75 1.75 0 0 1 3 19.25V5.75C3 4.784 3.784 4 4.75 4H7V2.75A.75.75 0 0 1 7.75 2"
    />
    <path
      fill="currentColor"
      d="M17 14a.75.75 0 0 1 .75.75v1.939l1.53 1.53a.75.75 0 0 1-1.06 1.061l-1.75-1.75a.75.75 0 0 1-.22-.53v-2.25A.75.75 0 0 1 17 14"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 11.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5M12.75 17a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCalendarClockFill;
