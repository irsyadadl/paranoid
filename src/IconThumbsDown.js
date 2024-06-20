import * as React from "react";
const SvgIconThumbsDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.252 13.25h2.998a1 1 0 0 0 1-1v-7.5a1 1 0 0 0-1-1h-2.998m0 0V13l-3.968 7.708c-.172.333-.52.542-.895.542a2 2 0 0 1-1.975-2.308l.575-3.692H5.75a3 3 0 0 1-2.964-3.451l.836-5.5A3 3 0 0 1 6.586 3.75z"
    />
  </svg>
);
export default SvgIconThumbsDown;
