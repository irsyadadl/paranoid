import * as React from "react";
const SvgIconNotesFill = (props) => (
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
      fillRule="evenodd"
      d="M3.5 4.25c0-.966.784-1.75 1.75-1.75h13.5c.966 0 1.75.784 1.75 1.75v15.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V16.5h-.25a.75.75 0 0 1 0-1.5h.25v-2.25h-.25a.75.75 0 0 1 0-1.5h.25V9h-.25a.75.75 0 0 1 0-1.5h.25zm5.5 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 8.25M9 12a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 9 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconNotesFill;
