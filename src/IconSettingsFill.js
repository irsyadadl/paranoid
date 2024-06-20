import * as React from "react";
const SvgIconSettingsFill = (props) => (
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
      d="M11.127 2.387a1.75 1.75 0 0 1 1.746 0l7.25 4.174c.543.313.877.891.877 1.517v7.844a1.75 1.75 0 0 1-.877 1.516l-7.25 4.175a1.75 1.75 0 0 1-1.746 0l-7.25-4.174A1.75 1.75 0 0 1 3 15.922V8.078c0-.626.334-1.204.877-1.517zM8.375 12a3.625 3.625 0 1 1 7.25 0 3.625 3.625 0 0 1-7.25 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSettingsFill;
