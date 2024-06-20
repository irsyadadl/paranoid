import * as React from "react";
const SvgIconPieChartFill = (props) => (
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
      d="M21.654 14.617A10 10 0 0 0 22 12c0-5.27-4.078-9.589-9.25-9.972v9.442z"
    />
    <path
      fill="currentColor"
      d="m21.154 16.031-9.404-3.324a.75.75 0 0 1-.5-.707V2.028A10 10 0 0 0 2 12c0 5.523 4.477 10 10 10 4.089 0 7.604-2.454 9.154-5.969"
    />
  </svg>
);
export default SvgIconPieChartFill;
