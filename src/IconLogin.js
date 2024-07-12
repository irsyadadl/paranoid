import * as React from "react";
const SvgIconLogin = (props) => (
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
      d="M19.25 4.5h-4.5a.75.75 0 0 1 0-1.5h4.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21h-4.5a.75.75 0 0 1 0-1.5h4.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25m-8.28 3.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06l2.22-2.22H3.75a.75.75 0 0 1 0-1.5h9.44l-2.22-2.22a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconLogin;
