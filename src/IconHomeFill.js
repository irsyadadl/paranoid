import * as React from "react";
const SvgIconHomeFill = (props) => (
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
      d="M13.108 1.688a1.75 1.75 0 0 0-2.216 0l-7.25 5.931A1.75 1.75 0 0 0 3 8.974V19.25c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 19.25V8.974a1.75 1.75 0 0 0-.642-1.355zM7.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHomeFill;
