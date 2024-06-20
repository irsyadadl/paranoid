import * as React from "react";
const SvgIconGuideFill = (props) => (
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
      d="M11.25 7.75A3.75 3.75 0 0 0 7.5 4H2.75A1.75 1.75 0 0 0 1 5.75v12.5c0 .966.784 1.75 1.75 1.75h5.973c.56 0 1.087.135 1.532.41.413.255.754.609.995 1.028zm1.5 13.688c.24-.42.582-.773.995-1.028a2.9 2.9 0 0 1 1.532-.41h5.973A1.75 1.75 0 0 0 23 18.25V5.75A1.75 1.75 0 0 0 21.25 4H16.5a3.75 3.75 0 0 0-3.75 3.75zm-.74.562h-.02z"
    />
  </svg>
);
export default SvgIconGuideFill;
