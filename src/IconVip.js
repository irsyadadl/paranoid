import * as React from "react";
const SvgIconVip = ({ title, titleId, ...props }) => (
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
      d="M4.313 19.25 1.75 6.75l6 3.5L12 3.75l4.25 6.5 6-3.5-2.563 12.5H4.313Z"
    />
  </svg>
);
export default SvgIconVip;
