import * as React from "react";
const SvgIconCircleDotsHorizontal = (props) => (
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
      stroke="currentColor"
      strokeWidth={0.5}
      d="M8 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    />
    <circle cx={12} cy={12} r={9.25} stroke="currentColor" strokeWidth={1.5} />
  </svg>
);
export default SvgIconCircleDotsHorizontal;
