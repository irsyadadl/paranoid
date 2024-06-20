import * as React from "react";
const SvgIconBookmarkCheck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.35 10.35 11 12l3.85-3.85m-9.1-5.404h12.5a1 1 0 0 1 1 1v16.35a1 1 0 0 1-1.568.823l-5.114-3.527a1 1 0 0 0-1.136 0l-5.114 3.527a1 1 0 0 1-1.568-.823V3.746a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconBookmarkCheck;
