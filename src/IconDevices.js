import * as React from "react";
const SvgIconDevices = (props) => (
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
      d="M17.25 18.25h2.25m-15.75-1.5v-12a1 1 0 0 1 1-1h14.5a1 1 0 0 1 1 1v4m-16.5 8h-2v2.5a1 1 0 0 0 1 1h11.5m-10.5-3.5h10.5m0 3.5V9.75a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1"
    />
  </svg>
);
export default SvgIconDevices;
