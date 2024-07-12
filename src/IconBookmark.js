import * as React from "react";
const SvgIconBookmark = (props) => (
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
      d="M19.25 20.252V3.75a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v16.502a1 1 0 0 0 1.558.829l5.134-3.455a1 1 0 0 1 1.116 0l5.134 3.455a1 1 0 0 0 1.558-.83Z"
    />
  </svg>
);
export default SvgIconBookmark;
