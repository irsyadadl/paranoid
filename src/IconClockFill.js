import * as React from "react";
const SvgIconClockFill = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m.75-14.25a.75.75 0 0 0-1.5 0V12c0 .199.079.39.22.53l2.75 2.75a.75.75 0 1 0 1.06-1.06l-2.53-2.53z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconClockFill;
