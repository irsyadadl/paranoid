import * as React from "react";
const SvgIconVideoCam = (props) => (
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
      d="M2.75 5.75a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1zM15.25 10l5.276-2.638a.5.5 0 0 1 .724.447v8.382a.5.5 0 0 1-.724.447L15.25 14z"
    />
  </svg>
);
export default SvgIconVideoCam;
