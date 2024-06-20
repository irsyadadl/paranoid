import * as React from "react";
const SvgIconVideoTrimFill = (props) => (
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
      d="M15.25 2a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V20H3.75A1.75 1.75 0 0 1 2 18.25V5.75C2 4.784 2.784 4 3.75 4H14.5V2.75a.75.75 0 0 1 .75-.75M7.957 8.906A.75.75 0 0 0 6.75 9.5v5a.75.75 0 0 0 1.207.595l3.25-2.5a.75.75 0 0 0 0-1.19z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M18 4h2.25c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H18z"
    />
  </svg>
);
export default SvgIconVideoTrimFill;
