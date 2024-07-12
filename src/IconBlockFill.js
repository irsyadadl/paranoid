import * as React from "react";
const SvgIconBlockFill = (props) => (
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
      d="M18.52 4.418A9.96 9.96 0 0 0 12 2C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.418 6.52L18.521 4.419Zm1.062 1.062L5.479 19.581A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10a9.96 9.96 0 0 0-2.418-6.52"
    />
  </svg>
);
export default SvgIconBlockFill;
