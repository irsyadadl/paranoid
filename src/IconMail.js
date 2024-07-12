import * as React from "react";
const SvgIconMail = (props) => (
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
      d="M21.002 9.25a14.93 14.93 0 0 1-9.002 3 14.93 14.93 0 0 1-9.001-3m.751-4.5h16.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconMail;
