import * as React from "react";
const SvgIconReply = (props) => (
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
      d="m1.915 11.628 8.501-7.63a.5.5 0 0 1 .834.373V8.5C19.75 8.5 22 11.75 22 20.25c-1.5-3-2.25-4.75-10.75-4.75v4.129a.5.5 0 0 1-.834.372l-8.501-7.63a.5.5 0 0 1 0-.744Z"
    />
  </svg>
);
export default SvgIconReply;
