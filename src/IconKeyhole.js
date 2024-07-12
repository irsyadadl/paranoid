import * as React from "react";
const SvgIconKeyhole = (props) => (
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
      d="M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 12.884a3.25 3.25 0 1 0-3 0v2.866a1.5 1.5 0 0 0 3 0z"
    />
  </svg>
);
export default SvgIconKeyhole;
