import * as React from "react";
const SvgIconMailFill = (props) => (
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
      d="M22 7.402V5.75A1.75 1.75 0 0 0 20.25 4H3.75A1.75 1.75 0 0 0 2 5.75v1.652A14.2 14.2 0 0 0 12 11.5c3.896 0 7.427-1.564 10-4.098"
    />
    <path
      fill="currentColor"
      d="M22 9.419A15.7 15.7 0 0 1 12 13 15.7 15.7 0 0 1 2 9.419v8.831c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 18.25z"
    />
  </svg>
);
export default SvgIconMailFill;
