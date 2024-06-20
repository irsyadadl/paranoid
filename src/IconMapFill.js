import * as React from "react";
const SvgIconMapFill = (props) => (
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
      d="M3.197 5.56 8 3.96v14.58l-3.697 1.233A1.75 1.75 0 0 1 2 18.113V7.22a1.75 1.75 0 0 1 1.197-1.66M14.5 20.054l-5-1.539V3.945l5 1.54zm1.5-.014 4.803-1.6A1.75 1.75 0 0 0 22 16.778V5.887a1.75 1.75 0 0 0-2.303-1.66L16 5.459z"
    />
  </svg>
);
export default SvgIconMapFill;
