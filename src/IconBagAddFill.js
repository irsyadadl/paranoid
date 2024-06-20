import * as React from "react";
const SvgIconBagAddFill = (props) => (
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
      d="M8 6a4 4 0 1 1 8 0v1h.887a1.75 1.75 0 0 1 1.731 1.494l.871 5.878A2.25 2.25 0 0 0 16 16.25V17h-.749a2.25 2.25 0 0 0 0 4.5H16v.5H5.409a1.75 1.75 0 0 1-1.731-2.006l1.704-11.5A1.75 1.75 0 0 1 7.112 7H8zm6.5 1V6a2.5 2.5 0 0 0-5 0v1z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M19 16.25a.75.75 0 0 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0V20h2.25a.75.75 0 0 0 0-1.5H19z"
    />
  </svg>
);
export default SvgIconBagAddFill;
