import * as React from "react";
const SvgIconWebcamFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2a8 8 0 0 0-.75 15.965V20.5h-4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-4.5v-2.535A8 8 0 0 0 12 2m-4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconWebcamFill;
