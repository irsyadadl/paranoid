import * as React from "react";
const SvgIconVideoCamOn = (props) => (
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
      d="M3.75 4.75h11.5a1 1 0 0 1 1 1v3l3.518-1.935a1 1 0 0 1 1.482.876v8.618a1 1 0 0 1-1.482.876L16.25 15.25v3a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M12.25 12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
    />
  </svg>
);
export default SvgIconVideoCamOn;
