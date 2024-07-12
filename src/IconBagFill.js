import * as React from "react";
const SvgIconBagFill = (props) => (
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
      fillRule="evenodd"
      d="M3.944 4.644A1.75 1.75 0 0 1 5.691 3H18.31c.925 0 1.69.72 1.747 1.644l.878 14.5A1.75 1.75 0 0 1 19.188 21H4.812a1.75 1.75 0 0 1-1.746-1.856zM9.75 8a.75.75 0 1 0-1.5 0 3.75 3.75 0 1 0 7.5 0 .75.75 0 0 0-1.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBagFill;
