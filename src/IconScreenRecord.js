import * as React from "react";
const SvgIconScreenRecord = (props) => (
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
      d="M2.75 7.25v-1.5a1 1 0 0 1 1-1h1.5m8.5 0h1.5m-6.5 0h1.5m8.5 0h1.5a1 1 0 0 1 1 1v1.5m-11 12h-1.5m-3.5 0h-1.5a1 1 0 0 1-1-1v-1.5m0-3.5v-2.5"
    />
    <circle
      cx={18.5}
      cy={15.5}
      r={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <circle
      cx={18.5}
      cy={15.5}
      r={0.75}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <circle
      cx={18.5}
      cy={15.5}
      r={4.75}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgIconScreenRecord;
