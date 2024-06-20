import * as React from "react";
const SvgIconArrowWall2Up = (props) => (
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
      d="m7.75 9.25 3.72-3.72a.75.75 0 0 1 1.06 0l3.72 3.72m-4.25 11V5.75m-7.25-2h14.5"
    />
  </svg>
);
export default SvgIconArrowWall2Up;
