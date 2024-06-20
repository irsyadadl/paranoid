import * as React from "react";
const SvgIconCirclePlay = (props) => (
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
      fillRule="evenodd"
      d="M12.25 3.75a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17m-10 8.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10.25 15.054V9.446a.5.5 0 0 1 .782-.413l4.112 2.804a.5.5 0 0 1 0 .826l-4.112 2.804a.5.5 0 0 1-.782-.413"
    />
  </svg>
);
export default SvgIconCirclePlay;
