import * as React from "react";
const SvgIconPlay = (props) => (
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
      d="M20.839 11.145 7.269 2.92a1 1 0 0 0-1.519.855v16.45a1 1 0 0 0 1.518.855l13.57-8.225a1 1 0 0 0 0-1.71Z"
    />
  </svg>
);
export default SvgIconPlay;
