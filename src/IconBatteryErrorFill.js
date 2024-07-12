import * as React from "react";
const SvgIconBatteryErrorFill = (props) => (
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
      d="M2.75 5A1.75 1.75 0 0 0 1 6.75v10.5c0 .966.784 1.75 1.75 1.75h15.5A1.75 1.75 0 0 0 20 17.25V16h1.75c.69 0 1.25-.56 1.25-1.25v-5.5C23 8.56 22.44 8 21.75 8H20V6.75A1.75 1.75 0 0 0 18.25 5zM20 9.5v5h1.5v-5zM7.22 9.22a.75.75 0 0 1 1.06 0L10 10.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L11.06 12l1.72 1.72a.75.75 0 1 1-1.06 1.06L10 13.06l-1.72 1.72a.75.75 0 0 1-1.06-1.06L8.94 12l-1.72-1.72a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBatteryErrorFill;
