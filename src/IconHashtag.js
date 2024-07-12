import * as React from "react";
const SvgIconHashtag = (props) => (
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
      d="m8.75 3.75-2 16.5m10.5-16.5-2 16.5M3.75 7.75h16.5m0 8.5H3.75"
    />
  </svg>
);
export default SvgIconHashtag;
