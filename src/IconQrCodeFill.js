import * as React from "react";
const SvgIconQrCodeFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 4.75C3 3.784 3.784 3 4.75 3h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 9.25 11h-4.5A1.75 1.75 0 0 1 3 9.25zm1.75-.25a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25zm8.25.25c0-.966.784-1.75 1.75-1.75h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 19.25 11h-4.5A1.75 1.75 0 0 1 13 9.25zm1.75-.25a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25zM3 14.75c0-.966.784-1.75 1.75-1.75h4.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 9.25 21h-4.5A1.75 1.75 0 0 1 3 19.25zm1.75-.25a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25zm9-1.5a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75m3.25.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H18.5v1.75a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13 20a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-7.5-4.5h3v3h-3zm0-10h3v3h-3zm10 0h3v3h-3z"
    />
  </svg>
);
export default SvgIconQrCodeFill;
