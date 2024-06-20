import * as React from "react";
const SvgIconVolumeUp = (props) => (
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
      d="M19 8.75V12m0 0v3.25M19 12h-3.25M19 12h3.25M2.75 7.75h2.957a1 1 0 0 0 .54-.158L12.25 3.75v16.5l-6.004-3.842a1 1 0 0 0-.539-.158H2.75a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconVolumeUp;
