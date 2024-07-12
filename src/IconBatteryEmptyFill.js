import * as React from "react";
const SvgIconBatteryEmptyFill = (props) => (
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
      fillRule="evenodd"
      d="M1 6.75C1 5.784 1.784 5 2.75 5h15.5c.966 0 1.75.784 1.75 1.75V8h1.75c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25H20v1.25A1.75 1.75 0 0 1 18.25 19H2.75A1.75 1.75 0 0 1 1 17.25zm19 7.75h1.5v-5H20z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBatteryEmptyFill;
