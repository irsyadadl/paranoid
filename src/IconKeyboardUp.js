import * as React from "react";
const SvgIconKeyboardUp = (props) => (
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
      stroke="currentColor"
      strokeWidth={0.5}
      d="M5.75 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm12.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm4.5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 17.25h4.5M14 5l-2-2-2 2M2.75 8.75h18.5a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1V9.75a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconKeyboardUp;
