import * as React from "react";
const SvgIconGallery = (props) => (
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
      strokeWidth={1.5}
      d="m3.75 16 3.897-3.668a.5.5 0 0 1 .696.011L12 16l1.646-1.646a.5.5 0 0 1 .708 0L19.5 19.5m-14.75.75h14.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1v14.5a1 1 0 0 0 1 1ZM15.75 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);
export default SvgIconGallery;
