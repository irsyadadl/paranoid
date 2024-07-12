import * as React from "react";
const SvgIconStoreFill = (props) => (
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
      d="M3 4.75C3 3.784 3.784 3 4.75 3h14.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25zm1.5 0a.25.25 0 0 1 .25-.25h2.375v2.7a1.32 1.32 0 0 1-1.313 1.32A1.32 1.32 0 0 1 4.5 7.2zM8.625 7.2V4.5h2.625v2.7a1.32 1.32 0 0 1-1.313 1.32A1.32 1.32 0 0 1 8.626 7.2Zm4.125 0V4.5h2.625v2.7a1.32 1.32 0 0 1-1.313 1.32A1.32 1.32 0 0 1 12.75 7.2m4.125 0V4.5h2.375a.25.25 0 0 1 .25.25V7.2a1.32 1.32 0 0 1-1.313 1.32 1.32 1.32 0 0 1-1.312-1.32M9.75 13A1.75 1.75 0 0 0 8 14.75v4.75h1.5v-4.75a.25.25 0 0 1 .25-.25h4.5a.25.25 0 0 1 .25.25v4.75H16v-4.75A1.75 1.75 0 0 0 14.25 13z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconStoreFill;
