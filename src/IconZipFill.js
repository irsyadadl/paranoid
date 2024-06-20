import * as React from "react";
const SvgIconZipFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M10.5 16v-1.5h3V16a1.5 1.5 0 0 1-3 0" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.75 3h14.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V4.75C3 3.784 3.784 3 4.75 3m5 2a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM9 9.75A.75.75 0 0 1 9.75 9h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 9.75M9.75 13a.75.75 0 0 0-.75.75V16a3 3 0 1 0 6 0v-2.25a.75.75 0 0 0-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconZipFill;
