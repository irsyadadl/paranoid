import * as React from "react";
const SvgIconWind = (props) => (
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
      d="M2.75 12h16.5a2 2 0 1 0-1.534-3.284M2.75 7.75h8.5a2 2 0 1 0 0-4c-.616 0-1.163.278-1.53.716M2.75 16.25h12.5a2 2 0 1 1-1.642 3.142"
    />
  </svg>
);
export default SvgIconWind;
