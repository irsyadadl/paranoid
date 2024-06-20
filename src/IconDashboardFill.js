import * as React from "react";
const SvgIconDashboardFill = (props) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.515 3.178A.75.75 0 0 0 21 15h-7.763l2.428-4.653a.75.75 0 1 0-1.33-.694L11.545 15H3a.75.75 0 0 0-.485.178A10 10 0 0 1 2 12m1.067 4.5A10 10 0 0 0 12 22a10 10 0 0 0 8.933-5.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDashboardFill;
