import * as React from "react";
const SvgIconCamera = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 6.75h3.215a1 1 0 0 0 .832-.445l1.406-2.11a1 1 0 0 1 .832-.445h3.93a1 1 0 0 1 .832.445l1.406 2.11a1 1 0 0 0 .832.445h3.215a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1V7.75a1 1 0 0 1 1-1Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.25 13a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgIconCamera;
