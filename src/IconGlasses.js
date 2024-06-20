import * as React from "react";
const SvgIconGlasses = (props) => (
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
      d="M.75 9.75H2m21.25 0H22m-7.939-.468A4.23 4.23 0 0 0 12 8.75a4.23 4.23 0 0 0-2.061.532M10.25 12a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0m12 0a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0"
    />
  </svg>
);
export default SvgIconGlasses;
