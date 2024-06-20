import * as React from "react";
const SvgIconCameraDot = (props) => (
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
      d="M7 9v-.01M3.75 4.75h.336a1 1 0 0 0 .707-.293l.414-.414a1 1 0 0 1 .707-.293h2.172a1 1 0 0 1 .707.293l.414.414a1 1 0 0 0 .707.293H20.25a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1M17.25 12a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0m-10-3a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0"
    />
  </svg>
);
export default SvgIconCameraDot;
