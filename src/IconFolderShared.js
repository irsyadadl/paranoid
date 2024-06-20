import * as React from "react";
const SvgIconFolderShared = (props) => (
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
      d="M13.25 19.25h7a1 1 0 0 0 1-1V7.75a1 1 0 0 0-1-1h-7.715a1 1 0 0 1-.832-.445l-1.406-2.11a1 1 0 0 0-.832-.445H3.75a1 1 0 0 0-1 1v3.5m5 4.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm-5.433 6.571C3.055 17.683 4.428 16.75 6 16.75s2.945.933 3.683 2.321c.303.57-.175 1.179-.82 1.179H3.137c-.645 0-1.123-.61-.82-1.179Z"
    />
  </svg>
);
export default SvgIconFolderShared;
