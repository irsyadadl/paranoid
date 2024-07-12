import * as React from "react";
const SvgIconNotepadFill = (props) => (
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
      d="M7.75 1.5a.75.75 0 0 1 .75.75v.278h2.75V2.25a.75.75 0 0 1 1.5 0v.278h2.75V2.25a.75.75 0 0 1 1.5 0v.278h1.75c.966 0 1.75.783 1.75 1.75V19.75a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75V4.278c0-.967.784-1.75 1.75-1.75H7V2.25a.75.75 0 0 1 .75-.75M8 9.75A.75.75 0 0 1 8.75 9h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 9.75m0 4a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconNotepadFill;
