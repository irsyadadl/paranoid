import * as React from "react";
const SvgIconPilone = (props) => (
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
      d="M16 9.75H8m-1.25 4.5h10.5M4.821 20 9.543 3.475a1 1 0 0 1 .961-.725h2.992a1 1 0 0 1 .961.725L19.18 20m-16.429.25h18.5"
    />
  </svg>
);
export default SvgIconPilone;
