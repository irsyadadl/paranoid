import * as React from "react";
const SvgIconCirclePerson = (props) => (
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
      d="M5.857 18.916C7.171 16.996 9.332 15.75 12 15.75s4.83 1.247 6.143 3.166m-12.286 0A9.22 9.22 0 0 0 12 21.25c2.358 0 4.51-.882 6.143-2.334m-12.286 0a9.25 9.25 0 1 1 12.286 0M15.25 10a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgIconCirclePerson;
