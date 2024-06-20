import * as React from "react";
const SvgIconArrowTriangleUpFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="M4.187 17.465C3.613 18.612 4.427 20 5.735 20h12.53c1.309 0 2.122-1.388 1.548-2.535L13.547 4.96c-.64-1.28-2.453-1.28-3.094 0z"
    />
  </svg>
);
export default SvgIconArrowTriangleUpFill;
