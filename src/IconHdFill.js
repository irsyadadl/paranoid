import * as React from "react";
const SvgIconHdFill = (props) => (
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
      d="M15.247 14.28h-1.04V9.67h1.04c1.299 0 2.031.81 2.031 2.285 0 1.524-.713 2.324-2.03 2.324Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 5.75C2 4.784 2.784 4 3.75 4h16.5c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25zm3.438 9.076c0 .484.273.767.737.767s.737-.283.737-.767v-2.295h3.174v2.295c0 .484.273.767.737.767s.737-.283.737-.767V9.128c0-.488-.273-.772-.737-.772s-.737.284-.737.772v2.187H6.912V9.128c0-.488-.273-.772-.737-.772s-.737.284-.737.772zm7.294-.098c0 .489.274.772.738.772h1.953c2.114 0 3.36-1.313 3.36-3.55s-1.246-3.496-3.36-3.496H13.47c-.464 0-.738.283-.738.767z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHdFill;
