import * as React from "react";
const SvgIconRepeat2 = (props) => (
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
      d="m17.25 21.25 3-3-3-3M6.75 2.75l-3 3 3 3m-1.5-3h15v5m-16.5 3v4.5h15"
    />
  </svg>
);
export default SvgIconRepeat2;
