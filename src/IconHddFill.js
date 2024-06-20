import * as React from "react";
const SvgIconHddFill = (props) => (
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
      d="M16 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-4 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.75 2A1.75 1.75 0 0 0 4 3.75v16.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.25V3.75A1.75 1.75 0 0 0 18.25 2zM5.5 15.5h13v4.75a.25.25 0 0 1-.25.25H5.75a.25.25 0 0 1-.25-.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHddFill;
