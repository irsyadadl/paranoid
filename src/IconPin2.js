import * as React from "react";
const SvgIconPin2 = (props) => (
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
      d="M12 15.25H4.75V12.5l.377-.377A7.25 7.25 0 0 0 7.25 6.997V3.75a1 1 0 0 1 1-1h7.5a1 1 0 0 1 1 1v3.247a7.25 7.25 0 0 0 2.123 5.127l.377.376v2.75zm0 0v6"
    />
  </svg>
);
export default SvgIconPin2;
