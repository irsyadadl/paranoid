import * as React from "react";
const SvgIconFullscreenFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 4.75C3 3.784 3.784 3 4.75 3h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0zm12-1a.75.75 0 0 1 .75-.75h3.5c.966 0 1.75.784 1.75 1.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1-.75-.75M3.75 15a.75.75 0 0 1 .75.75v3.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 0 1.5h-3.5A1.75 1.75 0 0 1 3 19.25v-3.5a.75.75 0 0 1 .75-.75m16.5 0a.75.75 0 0 1 .75.75v3.5A1.75 1.75 0 0 1 19.25 21h-3.5a.75.75 0 0 1 0-1.5h3.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFullscreenFill;
