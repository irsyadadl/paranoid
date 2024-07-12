import * as React from "react";
const SvgIconZoomFill = (props) => (
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
      d="M3 11a8 8 0 1 1 14.162 5.102l3.369 3.368a.75.75 0 1 1-1.06 1.06l-3.37-3.368A8 8 0 0 1 3 11m8.75-3.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconZoomFill;
