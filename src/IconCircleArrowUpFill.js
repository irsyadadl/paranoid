import * as React from "react";
const SvgIconCircleArrowUpFill = (props) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m6.22-1.53 3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 1 1-1.06 1.06l-1.97-1.97v6.69a.75.75 0 0 1-1.5 0V9.56l-1.97 1.97a.75.75 0 0 1-1.06-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCircleArrowUpFill;
