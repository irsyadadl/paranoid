import * as React from "react";
const SvgIconSketchbook = (props) => (
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
      d="M8.75 7.75h6.5m-6.5 4h3.5m7.5-7.5v15.5a1 1 0 0 1-1 1H5.25a1 1 0 0 1-1-1V4.25a1 1 0 0 1 1-1h13.5a1 1 0 0 1 1 1"
    />
  </svg>
);
export default SvgIconSketchbook;
