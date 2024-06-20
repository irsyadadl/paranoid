import * as React from "react";
const SvgIconKeyFill = (props) => (
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
      d="M1 12a6 6 0 0 1 10.749-3.668c.097.126.209.168.282.168h7.995a1.75 1.75 0 0 1 1.355.642l1.431 1.75a1.75 1.75 0 0 1 0 2.216l-1.431 1.75a1.75 1.75 0 0 1-1.355.642h-1.74a1.75 1.75 0 0 1-.927-.266l-1.227-.767a.25.25 0 0 0-.265 0l-1.226.767a1.75 1.75 0 0 1-.928.266h-1.681c-.074 0-.186.042-.283.168A6 6 0 0 1 1 12m4.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconKeyFill;
