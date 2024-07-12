import * as React from "react";
const SvgIconChart = (props) => (
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
      d="M4.75 13.527a1 1 0 0 0-1 1v4.723a1 1 0 0 0 1 1h1.83a1 1 0 0 0 1-1v-4.723a1 1 0 0 0-1-1zm6.33-4.443a1 1 0 0 0-1 1v9.167a1 1 0 0 0 1 1h1.83a1 1 0 0 0 1-1v-9.167a1 1 0 0 0-1-1zm6.34-5.334a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h1.83a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1z"
    />
  </svg>
);
export default SvgIconChart;
