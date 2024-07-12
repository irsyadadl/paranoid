import * as React from "react";
const SvgIconCloudDownload = (props) => (
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
      d="M16.75 19.25h1.375a4.125 4.125 0 1 0-.13-8.248 6 6 0 0 0-11.668-2.21A5.251 5.251 0 0 0 7 19.25h.25m4.75-7.5v7.5m0 0 2.5-2.5m-2.5 2.5-2.5-2.5"
    />
  </svg>
);
export default SvgIconCloudDownload;
