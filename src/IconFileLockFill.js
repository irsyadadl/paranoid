import * as React from "react";
const SvgIconFileLockFill = (props) => (
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
      d="M5.75 2H12v6.25c0 .966.784 1.75 1.75 1.75H20v10.25A1.75 1.75 0 0 1 18.25 22h-5.878q.126-.354.128-.75v-4.5a2.25 2.25 0 0 0-1.422-2.093A4.377 4.377 0 0 0 4 12.577V3.75C4 2.784 4.784 2 5.75 2"
    />
    <path
      fill="currentColor"
      d="m19.487 8.427.07.073H13.75a.25.25 0 0 1-.25-.25V2.443q.038.034.073.07z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 16.75a.75.75 0 0 1 .75-.75H4a3 3 0 1 1 6 0h.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-6.5a.75.75 0 0 1-.75-.75zm6.5.75h-5v3h5zm-1-1.5a1.5 1.5 0 0 0-3 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFileLockFill;
