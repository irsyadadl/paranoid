import * as React from "react";
const SvgIconMessageDots = (props) => (
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
      d="M21.75 12c0-5.156-3.792-8.25-9.75-8.25S2.25 6.844 2.25 12c0 1.337.92 3.605 1.064 3.952l.038.091c.099.27.505 1.71-1.102 3.84 2.167 1.031 4.468-.664 4.468-.664 1.592.84 3.486 1.031 5.282 1.031 5.958 0 9.75-3.094 9.75-8.25Z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={0.5}
      d="M6.75 12a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm4.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm4.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
    />
  </svg>
);
export default SvgIconMessageDots;
