import * as React from "react";
const SvgIconDeviceDesktop = (props) => (
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
      d="M18 20.25c-1.886-.649-3.903-1-6-1s-4.114.351-6 1m-2.25-4h16.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconDeviceDesktop;
