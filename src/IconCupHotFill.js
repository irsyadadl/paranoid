import * as React from "react";
const SvgIconCupHotFill = (props) => (
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
      d="M7.75 2.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 8.75C4 7.784 4.784 7 5.75 7h10.5c.966 0 1.75.784 1.75 1.75V9h.5a3.5 3.5 0 1 1 0 7H18v4.25A1.75 1.75 0 0 1 16.25 22H5.75A1.75 1.75 0 0 1 4 20.25zm14 5.75h.5a2 2 0 1 0 0-4H18z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCupHotFill;
