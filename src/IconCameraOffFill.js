import * as React from "react";
const SvgIconCameraOffFill = (props) => (
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
      d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L4.94 6H3.75A1.75 1.75 0 0 0 2 7.75v11.5c0 .966.784 1.75 1.75 1.75h16.19l.78.78a.75.75 0 1 0 1.06-1.06zm10.9 13.02-4.92-4.92a3.5 3.5 0 0 0 4.918 4.918Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M22 7.75v11.069L7.932 4.75l.647-.97A1.75 1.75 0 0 1 10.035 3h3.93a1.75 1.75 0 0 1 1.456.78l1.406 2.109a.25.25 0 0 0 .208.111h3.215c.966 0 1.75.784 1.75 1.75"
    />
  </svg>
);
export default SvgIconCameraOffFill;
