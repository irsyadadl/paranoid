import * as React from "react";
const SvgIconFileZip = (props) => (
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
      strokeWidth={1.5}
      d="M13.25 2.75h-6.5a2 2 0 0 0-2 2v14.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2V8.75m-6-6v4a2 2 0 0 0 2 2h4m-6-6c.32 0 .627.127.854.354l4.792 4.792c.227.227.354.534.354.854M8.75 19v-1.5m1.5 0V16m-1.5 0v-1.5m1.5 6V19m0-4.5V13m-1.5 0v-1.5"
    />
  </svg>
);
export default SvgIconFileZip;
