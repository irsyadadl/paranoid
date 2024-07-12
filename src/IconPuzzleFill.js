import * as React from "react";
const SvgIconPuzzleFill = (props) => (
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
      d="M9.5 4v-.5a2.5 2.5 0 0 1 5 0V4h4.75c.966 0 1.75.784 1.75 1.75V9a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0 0 5 .5.5 0 0 1 .5.5v3.25A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25V5.75C3 4.784 3.784 4 4.75 4z"
    />
  </svg>
);
export default SvgIconPuzzleFill;
