import * as React from "react";
const SvgIconDuplicateFill = ({ title, titleId, ...props }) => (
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
      d="M7 3h14v14.01h-4V21H3V7h4zm10 12.51V7H8.5V4.5h11v11.01z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDuplicateFill;
