import * as React from "react";
const SvgIconMailNotify = (props) => (
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
      d="M13.75 4.75h-10a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-6m-18.252-3c2.507 1.884 5.624 3 9.002 3 1.568 0 3.08-.24 4.5-.687M23.25 6a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0Z"
    />
  </svg>
);
export default SvgIconMailNotify;
