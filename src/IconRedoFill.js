import * as React from "react";
const SvgIconRedoFill = (props) => (
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
      d="M17.78 2.72a.75.75 0 1 0-1.06 1.06l1.72 1.72H9.75a7 7 0 0 0 0 14h8.5a.75.75 0 0 0 0-1.5h-8.5a5.5 5.5 0 1 1 0-11h8.69l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"
    />
  </svg>
);
export default SvgIconRedoFill;
