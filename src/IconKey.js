import * as React from "react";
const SvgIconKey = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.75 12a5.25 5.25 0 0 0 9.405 3.21c.213-.276.53-.46.877-.46h1.681a1 1 0 0 0 .53-.152l1.227-.767a1 1 0 0 1 1.06 0l1.227.767a1 1 0 0 0 .53.152h1.74a1 1 0 0 0 .773-.367l1.432-1.75a1 1 0 0 0 0-1.266L20.8 9.617a1 1 0 0 0-.774-.367h-7.995c-.347 0-.663-.185-.876-.459A5.25 5.25 0 0 0 1.75 12Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);
export default SvgIconKey;
