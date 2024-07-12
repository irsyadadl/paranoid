import * as React from "react";
const SvgIconLineChartR = (props) => (
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
      d="M2.75 16.75v2.5m6.166-6.5v6.5m6.166-10.5v10.5m6.166-14.5v14.5"
    />
  </svg>
);
export default SvgIconLineChartR;
