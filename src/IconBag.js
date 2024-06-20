import * as React from "react";
const SvgIconBag = (props) => (
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
      d="M15 8a3 3 0 1 1-6 0M4.693 4.69l-.879 14.5a1 1 0 0 0 .999 1.06h14.375a1 1 0 0 0 .998-1.06l-.879-14.5a1 1 0 0 0-.998-.94H5.69a1 1 0 0 0-.998.94Z"
    />
  </svg>
);
export default SvgIconBag;
