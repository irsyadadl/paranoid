import * as React from "react";
const SvgIconSearchFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M11 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M3 11a8 8 0 1 1 14.162 5.102l3.618 3.618a.75.75 0 1 1-1.06 1.06l-3.618-3.618A8 8 0 0 1 3 11"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSearchFill;
