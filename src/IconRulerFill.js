import * as React from "react";
const SvgIconRulerFill = (props) => (
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
      d="M14.762 1.927a1.75 1.75 0 0 1 2.475 0l4.836 4.835a1.75 1.75 0 0 1 0 2.475L9.237 22.073a1.75 1.75 0 0 1-2.475 0l-4.835-4.836a1.75 1.75 0 0 1 0-2.475l2.387-2.387L6.47 14.53a.75.75 0 1 0 1.06-1.06l-2.155-2.156 2.44-2.44 3.155 3.156a.75.75 0 1 0 1.06-1.06L8.875 7.813l2.44-2.44L13.47 7.53a.75.75 0 1 0 1.06-1.06l-2.155-2.156z"
    />
  </svg>
);
export default SvgIconRulerFill;
