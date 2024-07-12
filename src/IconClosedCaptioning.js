import * as React from "react";
const SvgIconClosedCaptioning = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.3 10.6a1.75 1.75 0 1 0 0 2.8.75.75 0 0 1 .901 1.2 3.25 3.25 0 1 1 0-5.2.75.75 0 0 1-.901 1.2m6.5 0a1.75 1.75 0 1 0 0 2.8.75.75 0 0 1 .901 1.2 3.25 3.25 0 1 1 0-5.2.75.75 0 0 1-.901 1.2"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 3.75H4.75a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1h14.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default SvgIconClosedCaptioning;
