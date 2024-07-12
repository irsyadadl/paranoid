import * as React from "react";
const SvgIconAugmentedReality = (props) => (
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
      strokeWidth={1.5}
      d="M1.75 6.75a1 1 0 0 1 1-1h18.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-4.767a1 1 0 0 1-.668-.255l-3.481-3.12a.5.5 0 0 0-.668 0l-3.481 3.12a1 1 0 0 1-.668.255H2.75a1 1 0 0 1-1-1z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M9.25 11.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm9 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
    />
  </svg>
);
export default SvgIconAugmentedReality;
