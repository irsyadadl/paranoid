import * as React from "react";
const SvgIconMinimizeWindowFill = (props) => (
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
      d="M10.25 13c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 22h-6.5A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75z"
    />
    <path
      fill="currentColor"
      d="M20.5 4.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v5.5a.75.75 0 0 1-1.5 0v-5.5C3 3.784 3.784 3 4.75 3h15.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 20.25 16h-5.5a.75.75 0 0 1 0-1.5h5.5a.25.25 0 0 0 .25-.25z"
    />
    <path
      fill="currentColor"
      d="M13.75 12a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97h1.19a.75.75 0 0 1 0 1.5z"
    />
  </svg>
);
export default SvgIconMinimizeWindowFill;
