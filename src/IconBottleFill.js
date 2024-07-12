import * as React from "react";
const SvgIconBottleFill = (props) => (
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
      d="M9.375 1a.75.75 0 0 0-.125 1.49v4.322a.25.25 0 0 1-.08.184L6.563 9.402A1.75 1.75 0 0 0 6 10.688V21.25c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 18 21.25V10.688a1.75 1.75 0 0 0-.563-1.286L14.83 6.996a.25.25 0 0 1-.08-.184V2.49A.75.75 0 0 0 14.625 1z"
    />
  </svg>
);
export default SvgIconBottleFill;
