import * as React from "react";
const SvgIconFolders = (props) => (
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
      d="M18.29 16.25h2.96a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1h-6.836a1 1 0 0 1-.707-.293l-1.414-1.414a1 1 0 0 0-.707-.293H6.75a1 1 0 0 0-1 1v3m-4 11.5V8.75a1 1 0 0 1 1-1h4.836a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293h6.836a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1"
    />
  </svg>
);
export default SvgIconFolders;
