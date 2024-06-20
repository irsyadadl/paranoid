import * as React from "react";
const SvgIconCloudySun = (props) => (
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
      d="M22.25 9.75h1m-8-7v-1M20.2 4.8l.707-.707m-11.313 0 .707.707m8.248 7.212A4 4 0 1 0 11.32 9m5.306 2.95q-.585.001-1.128.14c-.553.139-1.17-.07-1.49-.542a6.2 6.2 0 0 0-2.734-2.23 6.1 6.1 0 0 0-2.356-.468c-3.406 0-6.167 2.776-6.167 6.2s2.76 6.2 6.167 6.2h7.708c2.554 0 4.625-2.082 4.625-4.65a4.65 4.65 0 0 0-2.904-4.317 4.6 4.6 0 0 0-1.721-.333"
    />
  </svg>
);
export default SvgIconCloudySun;
