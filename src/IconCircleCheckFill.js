import * as React from "react";
const SvgIconCircleCheckFill = (props) => (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.58 7.975a.75.75 0 0 0-1.16-.95l-3.976 4.859L9.03 12.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.11-.055z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCircleCheckFill;
