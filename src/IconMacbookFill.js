import * as React from "react";
const SvgIconMacbookFill = (props) => (
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
      d="M3 4.75C3 3.784 3.784 3 4.75 3h14.5c.966 0 1.75.784 1.75 1.75V16h1.25a.75.75 0 0 1 .75.75v2.5A1.75 1.75 0 0 1 21.25 21H2.75A1.75 1.75 0 0 1 1 19.25v-2.5a.75.75 0 0 1 .75-.75H3zM2.5 17.5v1.75c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25V17.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMacbookFill;
