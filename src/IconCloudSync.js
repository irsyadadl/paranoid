import * as React from "react";
const SvgIconCloudSync = (props) => (
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
      d="M17.995 11.002a6 6 0 0 0-11.668-2.21A5.251 5.251 0 0 0 7 19.25h11.125a4.125 4.125 0 1 0-.13-8.248"
    />
    <path
      fill="currentColor"
      d="m14.383 10.307-1.726 1.444a.4.4 0 0 1-.657-.307v-.694a2 2 0 1 0 1.968 2.361.75.75 0 0 1 1.476.268A3.5 3.5 0 1 1 12 9.25v-.694a.4.4 0 0 1 .657-.307l1.726 1.444a.4.4 0 0 1 0 .614"
    />
  </svg>
);
export default SvgIconCloudSync;
