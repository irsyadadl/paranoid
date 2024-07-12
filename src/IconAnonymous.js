import * as React from "react";
const SvgIconAnonymous = (props) => (
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
      d="M10.177 16.31A3.24 3.24 0 0 1 12 15.75c.676 0 1.304.206 1.823.56m-3.646 0a3.251 3.251 0 1 0-6.354 1.383 3.251 3.251 0 0 0 6.354-1.384Zm3.646 0a3.25 3.25 0 1 0 6.353 1.381 3.25 3.25 0 0 0-6.353-1.382ZM2.75 11.25h2m0 0 .884-6.632a1 1 0 0 1 .992-.868h10.748a1 1 0 0 1 .992.868l.884 6.632m-14.5 0h14.5m0 0h2"
    />
  </svg>
);
export default SvgIconAnonymous;
