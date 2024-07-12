import * as React from "react";
const SvgIconVolumeFull = (props) => (
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
      d="M19.248 4.752A10.22 10.22 0 0 1 22.25 12c0 2.83-1.147 5.393-3.002 7.248M15.889 8.11A5.48 5.48 0 0 1 17.5 12a5.48 5.48 0 0 1-1.61 3.889M2.75 7.75h2.957a1 1 0 0 0 .54-.158L12.25 3.75v16.5l-6.004-3.842a1 1 0 0 0-.539-.158H2.75a1 1 0 0 1-1-1v-6.5a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconVolumeFull;
