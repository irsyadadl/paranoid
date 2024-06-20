import * as React from "react";
const SvgIconCropFill = (props) => (
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
      d="M15.75 8H8v7.75c0 .138.112.25.25.25H16V8.25a.25.25 0 0 0-.25-.25"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.75 2a.75.75 0 0 1 .75.75V5h10.75c.966 0 1.75.784 1.75 1.75V17.5h2.25a.75.75 0 0 1 0 1.5H19v2.25a.75.75 0 0 1-1.5 0V19H6.75A1.75 1.75 0 0 1 5 17.25V6.5H2.75a.75.75 0 0 1 0-1.5H5V2.75A.75.75 0 0 1 5.75 2m.75 15.25V6.5h10.75a.25.25 0 0 1 .25.25V17.5H6.75a.25.25 0 0 1-.25-.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCropFill;
