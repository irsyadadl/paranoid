import * as React from "react";
const SvgIconUndoFill = (props) => (
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
      d="M7.28 3.78a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L5.56 7h8.69a5.5 5.5 0 1 1 0 11h-8.5a.75.75 0 0 0 0 1.5h8.5a7 7 0 1 0 0-14H5.56z"
    />
  </svg>
);
export default SvgIconUndoFill;
