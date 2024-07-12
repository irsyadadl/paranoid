import * as React from "react";
const SvgIconChromecastFill = (props) => (
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
      d="M3.75 3A1.75 1.75 0 0 0 2 4.75v2.02q.372-.02.75-.02c7.456 0 13.5 6.044 13.5 13.5q0 .378-.02.75h4.02A1.75 1.75 0 0 0 22 19.25V4.75A1.75 1.75 0 0 0 20.25 3zm-1 10a.75.75 0 0 0 0 1.5 5.75 5.75 0 0 1 5.75 5.75.75.75 0 0 0 1.5 0A7.25 7.25 0 0 0 2.75 13"
    />
    <path
      fill="currentColor"
      d="M2 9.75A.75.75 0 0 1 2.75 9C8.963 9 14 14.037 14 20.25a.75.75 0 0 1-1.5 0 9.75 9.75 0 0 0-9.75-9.75.75.75 0 0 1-.75-.75M2.75 17a.75.75 0 0 0 0 1.5c.966 0 1.75.784 1.75 1.75a.75.75 0 0 0 1.5 0A3.25 3.25 0 0 0 2.75 17"
    />
  </svg>
);
export default SvgIconChromecastFill;
