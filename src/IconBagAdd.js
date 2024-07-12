import * as React from "react";
const SvgIconBagAdd = (props) => (
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
      d="M15.25 7.75V6a3.25 3.25 0 0 0-6.5 0v1.75m3.5 13.5H5.41a1 1 0 0 1-.99-1.146l1.704-11.5a1 1 0 0 1 .989-.854h9.774a1 1 0 0 1 .99.853l.65 4.397m-.277 3.25v3m0 0v3m0-3h-3m3 0h3"
    />
  </svg>
);
export default SvgIconBagAdd;
