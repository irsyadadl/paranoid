import * as React from "react";
const SvgIconCartFill = (props) => (
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
      d="M1.75 3a.75.75 0 0 0 0 1.5h2.147a.25.25 0 0 1 .247.21l1.73 10.817A1.75 1.75 0 0 0 7.604 17h10.292a1.75 1.75 0 0 0 1.73-1.477L20.9 7.445A1.25 1.25 0 0 0 19.665 6H5.87l-.245-1.526A1.75 1.75 0 0 0 3.897 3zm6.5 18a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m9 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
    />
  </svg>
);
export default SvgIconCartFill;
