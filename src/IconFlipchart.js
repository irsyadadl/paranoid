import * as React from "react";
const SvgIconFlipchart = (props) => (
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
      d="M3.75 3.75h16.5m-16.5 0v12.5a1 1 0 0 0 1 1h14.5a1 1 0 0 0 1-1V3.75m-16.5 0H23h-2.75m-16.5 0H1m13 16.5-1.666-2.5M10 20.25l1.666-2.5m.334-10v5.5m-3.75-1.5v1.5m7.5-3.5v3.5"
    />
  </svg>
);
export default SvgIconFlipchart;
