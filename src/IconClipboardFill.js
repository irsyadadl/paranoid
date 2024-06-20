import * as React from "react";
const SvgIconClipboardFill = (props) => (
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
      d="M8 3.75C8 2.784 8.784 2 9.75 2h4.5c.966 0 1.75.784 1.75 1.75V4h2.25c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V5.75C4 4.784 4.784 4 5.75 4H8zm1.5 2.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconClipboardFill;
