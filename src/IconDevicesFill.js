import * as React from "react";
const SvgIconDevicesFill = (props) => (
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
      d="M17.25 17.5a.75.75 0 0 0 0 1.5h2.25a.75.75 0 0 0 0-1.5z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.75 3A1.75 1.75 0 0 0 3 4.75V16H1.75a.75.75 0 0 0-.75.75v2.5c0 .966.784 1.75 1.75 1.75h10.918c.281.591.884 1 1.582 1h6A1.75 1.75 0 0 0 23 20.25V9.75A1.75 1.75 0 0 0 21.25 8H21V4.75A1.75 1.75 0 0 0 19.25 3zM15 9.75a.25.25 0 0 1 .25-.25h6a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25h-6a.25.25 0 0 1-.25-.25zm-1.5 7.75v2H2.75a.25.25 0 0 1-.25-.25V17.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDevicesFill;
