import * as React from "react";
const SvgIconRefresh = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.262 20.25v-3.5a.5.5 0 0 0-.5-.5h-3.5M4.75 3.75v3.5a.5.5 0 0 0 .5.5h3.5m-4.936 3.219A8.25 8.25 0 0 0 12 20.25 8.4 8.4 0 0 0 18.632 17m1.554-3.969A8.25 8.25 0 0 0 12 3.75 8.4 8.4 0 0 0 5.368 7"
    />
  </svg>
);
export default SvgIconRefresh;
