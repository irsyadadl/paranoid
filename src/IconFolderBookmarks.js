import * as React from "react";
const SvgIconFolderBookmarks = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.25 19.25h10a1 1 0 0 0 1-1V7.75a1 1 0 0 0-1-1h-7.715a1 1 0 0 1-.832-.445l-1.406-2.11a1 1 0 0 0-.832-.445H3.75a1 1 0 0 0-1 1v6m4.5 3h-5.5v6.5l2.75-1.5 2.75 1.5z"
    />
  </svg>
);
export default SvgIconFolderBookmarks;
