import * as React from "react";
const SvgIconAsteriskFill = (props) => (
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
      d="M12.003 2a.75.75 0 0 1 .75.75v7.951l6.887-3.976a.75.75 0 1 1 .75 1.3L13.504 12l6.885 3.976a.75.75 0 0 1-.75 1.298L12.753 13.3v7.951a.75.75 0 1 1-1.5 0V13.3l-6.885 3.974a.75.75 0 0 1-.75-1.299L10.504 12 3.617 8.025a.75.75 0 0 1 .75-1.3l6.886 3.976V2.75a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAsteriskFill;
