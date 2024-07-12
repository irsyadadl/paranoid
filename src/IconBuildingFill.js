import * as React from "react";
const SvgIconBuildingFill = (props) => (
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
      d="M6 5.75C6 4.784 6.784 4 7.75 4h8.5c.966 0 1.75.784 1.75 1.75V8h2.25c.966 0 1.75.784 1.75 1.75v8.75h.25a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5H2V9.75C2 8.784 2.784 8 3.75 8H6zM6 9.5H3.75a.25.25 0 0 0-.25.25v8.75H6zm12 9h2.5V9.75a.25.25 0 0 0-.25-.25H18zm-4 0v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v3.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBuildingFill;
