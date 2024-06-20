import * as React from "react";
const SvgIconBezierCurves = (props) => (
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
      d="M16.25 7.75h-.053c-4.15.001-4.245 8.5-8.394 8.5H7.75m-3-12.5h14.5a1 1 0 0 1 1 1v14.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconBezierCurves;
