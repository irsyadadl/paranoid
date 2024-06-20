import * as React from "react";
const SvgIconFolderLink = (props) => (
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
      d="M14.25 19.25h6a1 1 0 0 0 1-1V7.75a1 1 0 0 0-1-1h-7.715a1 1 0 0 1-.832-.445l-1.406-2.11a1 1 0 0 0-.832-.445H3.75a1 1 0 0 0-1 1v6M5 20.25a3.25 3.25 0 0 1 0-6.5m3 6.5a3.25 3.25 0 0 0 0-6.5M5.75 17h1.5"
    />
  </svg>
);
export default SvgIconFolderLink;
