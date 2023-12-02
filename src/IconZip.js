import * as React from "react";
const SvgIconZip = ({ title, titleId, ...props }) => (
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
      d="M6.25 3.75h-2.5v16.5h16.5V3.75h-2.5m-8 0h4.5m-4.5 4h4.5m-4.5 4h4.5V14a2.25 2.25 0 0 1-4.5 0z"
    />
  </svg>
);
export default SvgIconZip;
