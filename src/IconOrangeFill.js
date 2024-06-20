import * as React from "react";
const SvgIconOrangeFill = (props) => (
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
      d="M14.14 1.173C15.46.41 16.765.436 18.122.66a.75.75 0 0 1 .606.92 5.21 5.21 0 0 1-2.664 3.388A9 9 0 1 1 3 13a9 9 0 0 1 7.874-8.93c-.538-.757-1.56-1.45-2.94-1.573a.75.75 0 0 1 .133-1.494c1.786.16 3.26 1.076 4.068 2.248a5.2 5.2 0 0 1 2.005-2.078m1.377 2.385a3.7 3.7 0 0 0 1.452-1.525c-.784-.046-1.434.067-2.08.439a3.7 3.7 0 0 0-1.478 1.578 3.7 3.7 0 0 0 2.106-.492m3.163 10.57a.773.773 0 1 0-1.526-.256 5.23 5.23 0 0 1-4.282 4.282.773.773 0 0 0 .256 1.526 6.78 6.78 0 0 0 5.552-5.552"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconOrangeFill;
