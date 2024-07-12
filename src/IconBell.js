import * as React from "react";
const SvgIconBell = (props) => (
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
      strokeWidth={1.5}
      d="M16 18.25c-.673 1.766-2.21 3-4 3-1.789 0-3.327-1.234-4-3m-3.326 0h14.652a1 1 0 0 0 .987-1.16l-1.357-8.417a7.045 7.045 0 0 0-13.911 0l-1.358 8.418a1 1 0 0 0 .987 1.159Z"
    />
  </svg>
);
export default SvgIconBell;
