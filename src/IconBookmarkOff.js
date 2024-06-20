import * as React from "react";
const SvgIconBookmarkOff = (props) => (
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
      d="m1.75 15.25 3-1.098m17.5-6.402-3 1.098m-14.5 5.304V3.75a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v5.098m-14.5 5.304 14.5-5.304M4.75 18.25v2.002a1 1 0 0 0 1.558.829l5.134-3.455a1 1 0 0 1 1.116 0l5.134 3.455a1 1 0 0 0 1.558-.83V12.75"
    />
  </svg>
);
export default SvgIconBookmarkOff;
