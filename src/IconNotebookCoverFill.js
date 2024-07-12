import * as React from "react";
const SvgIconNotebookCoverFill = (props) => (
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
      d="M7 2.5H5.25A1.75 1.75 0 0 0 3.5 4.25v15.5c0 .966.784 1.75 1.75 1.75H7z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 21.5h10.25a1.75 1.75 0 0 0 1.75-1.75V4.25a1.75 1.75 0 0 0-1.75-1.75H8.5zM12.75 7a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconNotebookCoverFill;
