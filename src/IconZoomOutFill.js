import * as React from "react";
const SvgIconZoomOutFill = (props) => (
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
      d="M11 3a8 8 0 1 0 5.102 14.162l3.368 3.369a.75.75 0 1 0 1.06-1.06l-3.368-3.37A8 8 0 0 0 11 3m4 8a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1 0-1.5h6.5A.75.75 0 0 1 15 11"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconZoomOutFill;
