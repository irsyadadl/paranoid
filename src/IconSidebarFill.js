import * as React from "react";
const SvgIconSidebarFill = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 4v16h20V4zm1.5 14.5v-13h7v13z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSidebarFill;
