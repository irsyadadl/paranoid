import * as React from "react";
const SvgIconDuplicateFill = (props) => (
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
      d="M7 4.75C7 3.784 7.784 3 8.75 3h10.5c.966 0 1.75.784 1.75 1.75v10.51a1.75 1.75 0 0 1-1.75 1.75H17v2.24A1.75 1.75 0 0 1 15.25 21H4.75A1.75 1.75 0 0 1 3 19.25V8.75C3 7.784 3.784 7 4.75 7H7zm10 10.76V8.75A1.75 1.75 0 0 0 15.25 7H8.5V4.75a.25.25 0 0 1 .25-.25h10.5a.25.25 0 0 1 .25.25v10.51a.25.25 0 0 1-.25.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDuplicateFill;
