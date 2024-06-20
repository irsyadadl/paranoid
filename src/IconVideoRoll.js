import * as React from "react";
const SvgIconVideoRoll = (props) => (
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
      d="M12 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5m0 0h9.25M9.25 12a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m4.5-4.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m0 9a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m4.5-4.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
    />
  </svg>
);
export default SvgIconVideoRoll;
