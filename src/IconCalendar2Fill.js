import * as React from "react";
const SvgIconCalendar2Fill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h2.25c.966 0 1.75.784 1.75 1.75v13.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V5.75C3 4.784 3.784 4 4.75 4H7V2.75A.75.75 0 0 1 7.75 2M7 8.75A.75.75 0 0 1 7.75 8h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 7 8.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCalendar2Fill;
