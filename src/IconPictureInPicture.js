import * as React from "react";
const SvgIconPictureInPicture = (props) => (
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
      d="M9.25 17.25h-5.5a1 1 0 0 1-1-1V5.75a1 1 0 0 1 1-1h14.5a1 1 0 0 1 1 1v5.5m-5.5 3.5h6.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconPictureInPicture;
