import * as React from "react";
const SvgIconPictureInPictureFill = (props) => (
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
      d="M3.5 5.75a.25.25 0 0 1 .25-.25h14.5a.25.25 0 0 1 .25.25v5.5a.75.75 0 0 0 1.5 0v-5.5A1.75 1.75 0 0 0 18.25 4H3.75A1.75 1.75 0 0 0 2 5.75v10.5c0 .966.784 1.75 1.75 1.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.25.25 0 0 1-.25-.25z"
    />
    <path
      fill="currentColor"
      d="M13.75 14A1.75 1.75 0 0 0 12 15.75v3.5c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 22 19.25v-3.5A1.75 1.75 0 0 0 20.25 14z"
    />
  </svg>
);
export default SvgIconPictureInPictureFill;
