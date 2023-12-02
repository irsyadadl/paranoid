import * as React from "react";
const SvgIconMessages = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M17.25 14.25h4.002V3.75H7.002v4m10.25 0h-14.5v10.5h3.25v2.5l4.5-2.5h6.75z"
    />
  </svg>
);
export default SvgIconMessages;
