import * as React from "react";
const SvgIconHd = (props) => (
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
      d="M20.25 4.75H3.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1V5.75a1 1 0 0 0-1-1Z"
    />
    <path
      fill="currentColor"
      d="M6.175 15.593c-.464 0-.737-.283-.737-.767V9.128c0-.488.273-.772.737-.772s.737.284.737.772v2.187h3.174V9.128c0-.488.273-.772.737-.772s.737.284.737.772v5.698c0 .484-.273.767-.737.767s-.737-.283-.737-.767v-2.295H6.912v2.295c0 .484-.273.767-.737.767m7.295-.093c-.464 0-.738-.283-.738-.771V9.22c0-.484.274-.767.738-.767h1.953c2.114 0 3.36 1.26 3.36 3.496 0 2.237-1.246 3.55-3.36 3.55zm.737-1.22h1.04c1.318 0 2.031-.801 2.031-2.325 0-1.475-.732-2.285-2.03-2.285h-1.041z"
    />
  </svg>
);
export default SvgIconHd;
