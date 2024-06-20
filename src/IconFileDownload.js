import * as React from "react";
const SvgIconFileDownload = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 21.25h-3a1 1 0 0 1-1-1V3.75a1 1 0 0 1 1-1h6.586a1 1 0 0 1 .707.293l5.914 5.914a1 1 0 0 1 .293.707V20.25a1 1 0 0 1-1 1h-3m-2.5-18v5a1 1 0 0 0 1 1h5M12 13.75V20m0 0 2.5-2.5M12 20l-2.5-2.5"
    />
  </svg>
);
export default SvgIconFileDownload;
