import * as React from "react";
const SvgIconBillFill = (props) => (
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
      d="M1 6.25c0-.966.784-1.75 1.75-1.75h18.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H2.75A1.75 1.75 0 0 1 1 17.75zM3.75 7a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm14.75 9.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBillFill;
