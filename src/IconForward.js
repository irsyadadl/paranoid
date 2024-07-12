import * as React from "react";
const SvgIconForward = (props) => (
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
      d="m21.834 11.628-8.502-7.63a.5.5 0 0 0-.834.373V8.5c-8.5 0-10.75 3.25-10.75 11.75 1.5-3 2.25-4.75 10.75-4.75v4.129a.5.5 0 0 0 .835.372l8.5-7.63a.5.5 0 0 0 0-.744Z"
    />
  </svg>
);
export default SvgIconForward;
