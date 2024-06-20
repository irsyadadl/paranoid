import * as React from "react";
const SvgIconCameraFill = (props) => (
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
      d="M8.58 3.78A1.75 1.75 0 0 1 10.034 3h3.93a1.75 1.75 0 0 1 1.456.78l1.406 2.109a.25.25 0 0 0 .208.111h3.215c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25V7.75C2 6.784 2.784 6 3.75 6h3.215a.25.25 0 0 0 .208-.111zM12 9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCameraFill;
