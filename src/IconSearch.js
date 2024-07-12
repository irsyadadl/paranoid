import * as React from "react";
const SvgIconSearch = (props) => (
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
      d="m20.25 20.25-4.123-4.123m0 0A7.25 7.25 0 1 0 5.873 5.873a7.25 7.25 0 0 0 10.253 10.253Z"
    />
  </svg>
);
export default SvgIconSearch;
