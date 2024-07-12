import * as React from "react";
const SvgIconPriceTagFill = (props) => (
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
      d="M2 3.75C2 2.784 2.784 2 3.75 2h7.829c.464 0 .91.184 1.237.513l8.757 8.756a1.75 1.75 0 0 1 0 2.475l-7.829 7.83a1.75 1.75 0 0 1-2.475 0l-8.756-8.758A1.75 1.75 0 0 1 2 11.58zM7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconPriceTagFill;
