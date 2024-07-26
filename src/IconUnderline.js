import * as React from "react";
const SvgIconUnderline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.75 21.5h12.5m-12.5-17v8.25a6.25 6.25 0 1 0 12.5 0V4.5"
    />
  </svg>
);
export default SvgIconUnderline;
