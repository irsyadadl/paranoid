import * as React from "react";
const SvgIconBag2 = (props) => (
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
      strokeWidth={1.5}
      d="M15.25 7.75V6a3.25 3.25 0 0 0-6.5 0v1.75m-3.34 13.5h13.18a1 1 0 0 0 .99-1.146l-1.704-11.5a1 1 0 0 0-.99-.854H7.113a1 1 0 0 0-.99.853l-1.703 11.5a1 1 0 0 0 .99 1.147Z"
    />
  </svg>
);
export default SvgIconBag2;
