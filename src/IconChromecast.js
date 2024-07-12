import * as React from "react";
const SvgIconChromecast = (props) => (
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
      d="M2.75 13.75a6.5 6.5 0 0 1 6.5 6.5m-6.5-10.5c5.799 0 10.5 4.701 10.5 10.5m3.5 0h3.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v1.5m0 11.5a2.5 2.5 0 0 1 2.5 2.5"
    />
  </svg>
);
export default SvgIconChromecast;
