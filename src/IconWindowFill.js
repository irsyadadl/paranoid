import * as React from "react";
const SvgIconWindowFill = (props) => (
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
      d="M2.75 4a.75.75 0 0 0-.75.75V9.5h20V4.75a.75.75 0 0 0-.75-.75zm2 2a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m1.75.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M9.75 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M2 19.25V11h20v8.25a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
export default SvgIconWindowFill;
