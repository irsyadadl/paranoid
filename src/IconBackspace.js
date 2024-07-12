import * as React from "react";
const SvgIconBackspace = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.248 10 4.002 4.002M15.252 10l-4.002 4.002m-8.108-2.57 4.31-6.25a1 1 0 0 1 .823-.432H20.25a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H8.275a1 1 0 0 1-.823-.432l-4.31-6.25a1 1 0 0 1 0-1.136"
    />
  </svg>
);
export default SvgIconBackspace;
