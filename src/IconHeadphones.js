import * as React from "react";
const SvgIconHeadphones = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 13.75V12a8.25 8.25 0 1 1 16.5 0v1.75m-16.5 0v6.5h4v-6.5zm16.5 0v6.5h-4v-6.5z"
    />
  </svg>
);
export default SvgIconHeadphones;
