import * as React from "react";
const SvgIconBatteryLoading = (props) => (
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
      d="M7.75 5.75h-5a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h2.5m10.5-12.5h2.5a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1h-5m-1-12.5L7.5 12h6l-4.75 6.25m10.5-9.5h2.5a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5h-2.5z"
    />
  </svg>
);
export default SvgIconBatteryLoading;
