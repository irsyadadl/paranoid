import * as React from "react";
const SvgIconBrandFramer = (props) => (
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
      d="M18.667 2v6.667H12L5.333 2zM5.333 8.667H12l6.667 6.666H12V22l-6.667-6.667z"
    />
  </svg>
);
export default SvgIconBrandFramer;
