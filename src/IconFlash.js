import * as React from "react";
const SvgIconFlash = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.798 8.75H13.75a.5.5 0 0 1-.5-.5V2.356a.5.5 0 0 0-.912-.284L3.791 14.466a.5.5 0 0 0 .411.784h6.048a.5.5 0 0 1 .5.5v5.894a.5.5 0 0 0 .912.284l8.547-12.394a.5.5 0 0 0-.411-.784Z"
    />
  </svg>
);
export default SvgIconFlash;
