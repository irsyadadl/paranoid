import * as React from "react";
const SvgIconEnter = ({ title, titleId, ...props }) => (
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
      d="M20.25 4.75V15H4m0 0 4-4m-4 4 4 4"
    />
  </svg>
);
export default SvgIconEnter;
