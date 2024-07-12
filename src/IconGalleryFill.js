import * as React from "react";
const SvgIconGalleryFill = (props) => (
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
      d="M14.25 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 4.75C3 3.784 3.784 3 4.75 3h14.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25zm16.5 13.69-4.616-4.617a1.25 1.25 0 0 0-1.768 0l-.94.94a.25.25 0 0 1-.353 0l-2.95-2.95a1.25 1.25 0 0 0-1.74-.027L4.5 14.264V4.75a.25.25 0 0 1 .25-.25h14.5a.25.25 0 0 1 .25.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconGalleryFill;
