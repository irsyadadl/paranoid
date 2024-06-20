import * as React from "react";
const SvgIconMessagesFill = (props) => (
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
      d="M20.252 3c.967 0 1.75.784 1.75 1.75v8.5a1.75 1.75 0 0 1-1.75 1.75h-2.25v2.25a1.75 1.75 0 0 1-1.75 1.75h-5.555l-4.33 2.406a.75.75 0 0 1-1.115-.656V19h-1.5a1.75 1.75 0 0 1-1.75-1.75v-8.5c0-.966.784-1.75 1.75-1.75h2.5V4.75c0-.966.784-1.75 1.75-1.75zm-12.5 4h8.5c.967 0 1.75.784 1.75 1.75v4.75h2.25a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H8.002a.25.25 0 0 0-.25.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMessagesFill;
