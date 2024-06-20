import * as React from "react";
const SvgIconSmartwatch = (props) => (
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
      d="m7.5 6.25.401-3.61a1 1 0 0 1 .994-.89h6.21a1 1 0 0 1 .994.89l.401 3.61M12 8.75V12l1.5 1.5m-6 4.25.401 3.61a1 1 0 0 0 .994.89h6.21a1 1 0 0 0 .994-.89l.401-3.61M19.25 12a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0"
    />
  </svg>
);
export default SvgIconSmartwatch;
