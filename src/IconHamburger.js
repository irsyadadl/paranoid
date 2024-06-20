import * as React from "react";
const SvgIconHamburger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 12h18.5M2.75 5.75h18.5m-18.5 12.5h18.5"
    />
  </svg>
);
export default SvgIconHamburger;
