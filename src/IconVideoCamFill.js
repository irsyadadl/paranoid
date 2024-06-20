import * as React from "react";
const SvgIconVideoCamFill = (props) => (
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
      d="M2 5.75C2 4.784 2.784 4 3.75 4h10.5c.966 0 1.75.784 1.75 1.75v3.037l4.191-2.096A1.25 1.25 0 0 1 22 7.81v8.382a1.25 1.25 0 0 1-1.809 1.118L16 15.214v3.036A1.75 1.75 0 0 1 14.25 20H3.75A1.75 1.75 0 0 1 2 18.25zm14 7.787 4.5 2.25V8.214l-4.5 2.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconVideoCamFill;
