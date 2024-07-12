import * as React from "react";
const SvgIconDiamond = (props) => (
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
      d="M8.5 7.75 6.25 10l2.25 2.25m4.207 7.793L22.05 10.7a1 1 0 0 0 .006-1.408l-5.154-5.244a1 1 0 0 0-.713-.299H7.812a1 1 0 0 0-.713.299L1.945 9.293A1 1 0 0 0 1.95 10.7l9.342 9.342a1 1 0 0 0 1.414 0Z"
    />
  </svg>
);
export default SvgIconDiamond;
