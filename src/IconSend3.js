import * as React from "react";
const SvgIconSend3 = (props) => (
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
      d="M9 11.75 1.966 5.497c-.687-.61-.255-1.747.664-1.747h18.65a1 1 0 0 1 .868 1.495l-9.146 16.039c-.45.79-1.636.617-1.843-.269zm0 0L22.586 4"
    />
  </svg>
);
export default SvgIconSend3;
