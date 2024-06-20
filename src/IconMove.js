import * as React from "react";
const SvgIconMove = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 5.5 2.47-2.47a.75.75 0 0 1 1.06 0L15 5.5M5.5 9l-2.47 2.47a.75.75 0 0 0 0 1.06L5.5 15m13-6 2.47 2.47a.75.75 0 0 1 0 1.06L18.5 15M15 18.5l-2.47 2.47a.75.75 0 0 1-1.06 0L9 18.5M12 4v8m0 0v8m0-8H4m8 0h8"
    />
  </svg>
);
export default SvgIconMove;
