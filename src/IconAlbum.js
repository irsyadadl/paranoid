import * as React from "react";
const SvgIconAlbum = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 5.75v12.5m4-13.5v14.5m12.5-13.142v11.784a1 1 0 0 1-.793.979l-6.5 1.374a1 1 0 0 1-1.207-.979V4.735a1 1 0 0 1 1.207-.979l6.5 1.374a1 1 0 0 1 .793.979Z"
    />
  </svg>
);
export default SvgIconAlbum;
