import * as React from "react";
const SvgIconCameraDotFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M14 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.914 3c-.464 0-.909.184-1.237.513l-.414.414A.25.25 0 0 1 4.086 4H3.75A1.75 1.75 0 0 0 2 5.75v12.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 18.25V5.75A1.75 1.75 0 0 0 20.25 4H9.914a.25.25 0 0 1-.177-.073l-.414-.414A1.75 1.75 0 0 0 8.086 3zM10 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0m-3-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCameraDotFill;
