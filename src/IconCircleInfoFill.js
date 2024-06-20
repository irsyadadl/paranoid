import * as React from "react";
const SvgIconCircleInfoFill = (props) => (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-2 9a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0v-4.5h-.5A.75.75 0 0 1 10 11m2-3.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCircleInfoFill;
