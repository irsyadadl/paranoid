import * as React from "react";
const SvgIconLocation = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.75 10a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 10c0 5.028-4.965 9.537-6.678 10.942a.89.89 0 0 1-1.144 0C9.715 19.537 4.75 15.028 4.75 10a7.25 7.25 0 0 1 14.5 0Z"
    />
  </svg>
);
export default SvgIconLocation;
