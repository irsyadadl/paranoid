import * as React from "react";
const SvgIconSdCardFill = (props) => (
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
      d="M5.75 2A1.75 1.75 0 0 0 4 3.75v16.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.25v-8.684a2.75 2.75 0 0 0-.408-1.441l-1.407-2.286A1.25 1.25 0 0 1 18 7.184V3.75A1.75 1.75 0 0 0 16.25 2zm3.5 4a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 9.25 6m4.25.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSdCardFill;
