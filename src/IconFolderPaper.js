import * as React from "react";
const SvgIconFolderPaper = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.25 5.75h3a1 1 0 0 1 1 1v4m-16.5-3v-3a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v6m-12.5-3a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1m-16.5-3h4.586a1 1 0 0 1 .707.293l2.414 2.414a1 1 0 0 0 .707.293h4.086m0 0h4"
    />
  </svg>
);
export default SvgIconFolderPaper;
