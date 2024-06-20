import * as React from "react";
const SvgIconPauseFill = (props) => (
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
      d="M5.75 3A1.75 1.75 0 0 0 4 4.75v14.5c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 10 19.25V4.75A1.75 1.75 0 0 0 8.25 3zm10 0A1.75 1.75 0 0 0 14 4.75v14.5c0 .966.784 1.75 1.75 1.75h2.5A1.75 1.75 0 0 0 20 19.25V4.75A1.75 1.75 0 0 0 18.25 3z"
    />
  </svg>
);
export default SvgIconPauseFill;
