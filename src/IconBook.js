import * as React from "react";
const SvgIconBook = (props) => (
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
      d="M19.25 12v3.75a1 1 0 0 1-1 1H7a2.25 2.25 0 0 0 0 4.5h3M8.75 7h6.5m-6.5 4h3.5m-5.5-8.25h11.5a1 1 0 0 1 1 1v16.5a1 1 0 0 1-1 1H6.75a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgIconBook;
