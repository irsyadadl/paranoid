import * as React from "react";
const SvgIconBroadcast = (props) => (
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
      d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m6.91.67A7.5 7.5 0 0 1 17.59 17a.75.75 0 0 1-1.117-1 5.995 5.995 0 0 0 0-8 .751.751 0 1 1 1.117-1 7.51 7.51 0 0 1 1.32 7.92M6.47 9.664A6 6 0 0 0 7.524 16a.75.75 0 0 1-1.117 1 7.493 7.493 0 0 1 0-10 .751.751 0 0 1 1.12 1A6 6 0 0 0 6.47 9.666ZM23.25 12a11.2 11.2 0 0 1-3.215 7.875.75.75 0 1 1-1.07-1.05 9.74 9.74 0 0 0 0-13.646.75.75 0 1 1 1.07-1.054A11.2 11.2 0 0 1 23.25 12M5.035 18.823a.75.75 0 1 1-1.07 1.052 11.24 11.24 0 0 1 0-15.75.75.75 0 1 1 1.07 1.05 9.74 9.74 0 0 0 0 13.646z"
    />
  </svg>
);
export default SvgIconBroadcast;
