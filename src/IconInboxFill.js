import * as React from "react";
const SvgIconInboxFill = (props) => (
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
      d="M4.75 3h14.5c.966 0 1.75.784 1.75 1.75V12h-5.07a.75.75 0 0 0-.737.61 3.251 3.251 0 0 1-6.386 0A.75.75 0 0 0 8.07 12H3V4.75C3 3.784 3.784 3 4.75 3"
    />
    <path
      fill="currentColor"
      d="M3 13.5v5.75c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 19.25V13.5h-4.492a4.751 4.751 0 0 1-9.016 0z"
    />
  </svg>
);
export default SvgIconInboxFill;
