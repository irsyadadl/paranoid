import * as React from "react";
const SvgIconPieChart = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2.75a9.25 9.25 0 0 0 0 18.5 9.25 9.25 0 0 0 8.724-6.167M12 2.75A9.25 9.25 0 0 1 21.25 12a9.2 9.2 0 0 1-.526 3.083M12 2.75V12l8.724 3.083"
    />
  </svg>
);
export default SvgIconPieChart;
