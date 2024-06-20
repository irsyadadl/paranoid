import * as React from "react";
const SvgIconCreditCard = (props) => (
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
      d="M2.75 9.75v8.496a1 1 0 0 0 1 1h16.496a1 1 0 0 0 1-1V9.75m-18.496 0V5.753a1 1 0 0 1 1-1h16.495a1 1 0 0 1 1 .997q.002 2 .001 4m-18.496 0h18.496M6.75 13.25h3"
    />
  </svg>
);
export default SvgIconCreditCard;
