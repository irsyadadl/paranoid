import * as React from "react";
const SvgIconCommandRegularFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 7.25a3.5 3.5 0 1 1 7 0v2h4v-2a3.5 3.5 0 1 1 3.5 3.5h-2v4h2a3.5 3.5 0 1 1-3.5 3.5v-2h-4v2a3.5 3.5 0 1 1-3.5-3.5h2v-4h-2A3.5 3.5 0 0 1 3 7.25m5.5 2v-2a2 2 0 1 0-2 2zm1.5 1.5v4h4v-4zm-1.5 5.5h-2a2 2 0 1 0 2 2zm7 0v2a2 2 0 1 0 2-2zm0-7h2a2 2 0 1 0-2-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCommandRegularFill;
