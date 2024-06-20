import * as React from "react";
const SvgIconBatteryLoadingFill = (props) => (
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
      d="M2.75 5h9.063L6.9 11.55a.75.75 0 0 0 .6 1.2H12L7.312 19H2.75A1.75 1.75 0 0 1 1 17.25V6.75C1 5.784 1.784 5 2.75 5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18.25 19H9.187l4.913-6.55a.75.75 0 0 0-.6-1.2H9L13.688 5h4.562c.966 0 1.75.784 1.75 1.75V8h1.75c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25H20v1.25A1.75 1.75 0 0 1 18.25 19M20 14.5h1.5v-5H20z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBatteryLoadingFill;
