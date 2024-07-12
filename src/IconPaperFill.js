import * as React from "react";
const SvgIconPaperFill = (props) => (
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
      d="M11.25 5.377 4.13 3.79A1.75 1.75 0 0 0 2 5.498v12.388c0 .82.569 1.53 1.37 1.708l7.88 1.757zm1.5 15.974 7.88-1.757A1.75 1.75 0 0 0 22 17.886V5.498a1.75 1.75 0 0 0-2.13-1.708l-7.12 1.587z"
    />
  </svg>
);
export default SvgIconPaperFill;
