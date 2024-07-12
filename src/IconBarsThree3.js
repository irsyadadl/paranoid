import * as React from "react";
const SvgIconBarsThree3 = (props) => (
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
      d="M2.75 12h10.5M2.75 5.75h18.5m-18.5 12.5h18.5"
    />
  </svg>
);
export default SvgIconBarsThree3;
