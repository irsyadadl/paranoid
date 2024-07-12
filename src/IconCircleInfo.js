import * as React from "react";
const SvgIconCircleInfo = (props) => (
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
      d="M10.75 11H12v5.25M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0"
    />
    <rect
      width={1.25}
      height={1.25}
      x={11.375}
      y={7.375}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.25}
      rx={0.625}
    />
  </svg>
);
export default SvgIconCircleInfo;
