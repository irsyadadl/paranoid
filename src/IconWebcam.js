import * as React from "react";
const SvgIconWebcam = (props) => (
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
      d="M6.75 21.25h10.5m-5.25-4V21m0-3.75a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5M15.25 10a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0"
    />
  </svg>
);
export default SvgIconWebcam;
