import * as React from "react";
const SvgIconColorPalette = (props) => (
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
      strokeWidth={1.5}
      d="M21.25 12c0 7.11-7.593.798-9.25 4.118-1.028 2.059 2.906 4.632 0 4.632-5.109 0-9.25-3.918-9.25-8.75S6.891 3.25 12 3.25s9.25 3.918 9.25 8.75Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M11.5 7.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM8.5 12A1.25 1.25 0 1 1 6 12a1.25 1.25 0 0 1 2.5 0Zm8-2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    />
  </svg>
);
export default SvgIconColorPalette;
