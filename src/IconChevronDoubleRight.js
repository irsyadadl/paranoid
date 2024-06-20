import * as React from "react";
const SvgIconChevronDoubleRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14 16 4-4-4-4m-7 8 4-4-4-4"
    />
  </svg>
);
export default SvgIconChevronDoubleRight;
