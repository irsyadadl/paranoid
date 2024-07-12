import * as React from "react";
const SvgIconLoader = (props) => (
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
      strokeOpacity={0.25}
      strokeWidth={3.636}
      d="M11.909 21a9.09 9.09 0 1 0 0-18.182 9.09 9.09 0 0 0 0 18.182Z"
    />
    <path
      fill="currentColor"
      d="M4.636 11.91a7.273 7.273 0 0 1 7.273-7.274V1C5.885 1 1 5.885 1 11.91zm1.819 4.81a7.24 7.24 0 0 1-1.819-4.81H1c0 2.764 1.032 5.294 2.727 7.215z"
    />
  </svg>
);
export default SvgIconLoader;
