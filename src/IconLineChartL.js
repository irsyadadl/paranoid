import * as React from "react";
const SvgIconLineChartL = (props) => (
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
      d="M21.248 16.75v2.5m-6.166-6.5v6.5M8.916 8.75v10.5M2.75 4.75v14.5"
    />
  </svg>
);
export default SvgIconLineChartL;
