import * as React from "react";
const SvgIconCupHot = (props) => (
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
      strokeWidth={1.5}
      d="M11 5.25v-2.5m-4 2.5v-2.5m8 2.5v-2.5m-9.25 18.5h10.5a1 1 0 0 0 1-1V8.75a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1Zm11.5-11.5h1.25a2.75 2.75 0 1 1 0 5.5h-1.25z"
    />
  </svg>
);
export default SvgIconCupHot;
