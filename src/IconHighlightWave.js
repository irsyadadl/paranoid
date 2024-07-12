import * as React from "react";
const SvgIconHighlightWave = (props) => (
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
      d="M21 18s-1.334 1.544-2.834 1.544-2.707-1.43-4.18-1.43-2.326.672-3.236 1.636m6.957-16.293 1.836 1.836a1 1 0 0 1 0 1.414l-13.25 13.25a1 1 0 0 1-.707.293H2.75v-2.836a1 1 0 0 1 .293-.707l13.25-13.25a1 1 0 0 1 1.414 0"
    />
  </svg>
);
export default SvgIconHighlightWave;
