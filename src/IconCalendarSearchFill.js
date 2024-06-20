import * as React from "react";
const SvgIconCalendarSearchFill = (props) => (
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
      d="M9.5 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h2.25c.966 0 1.75.784 1.75 1.75v13.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V5.75C3 4.784 3.784 4 4.75 4H7V2.75A.75.75 0 0 1 7.75 2m4 6.25a3.75 3.75 0 1 0 2.068 6.879l.902.901a.75.75 0 1 0 1.06-1.06l-.901-.902A3.75 3.75 0 0 0 11.75 8.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCalendarSearchFill;
