import * as React from "react";
const SvgIconAnalyticsChart = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 12h4L10 16.25l4-8.5L16.25 12h4m-15.5 8.25h14.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1Z"
    />
  </svg>
);
export default SvgIconAnalyticsChart;
