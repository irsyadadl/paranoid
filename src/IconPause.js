import * as React from "react";
const SvgIconPause = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 3.75h4.5v16.5h-4.5zm10 0h4.5v16.5h-4.5z"
    />
  </svg>
);
export default SvgIconPause;
