import * as React from "react";
const SvgIconBatteryError = (props) => (
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
      d="M12.25 9.75 10 12m0 0-2.25 2.25M10 12 7.75 9.75M10 12l2.25 2.25m-9.5 4h15.5a1 1 0 0 0 1-1V6.75a1 1 0 0 0-1-1H2.75a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1m16.5-9.5h2.5a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-.5.5h-2.5z"
    />
  </svg>
);
export default SvgIconBatteryError;
