import * as React from "react";
const SvgIconZoomFill = ({ title, titleId, ...props }) => (
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
      d="M3 11a8 8 0 1 1 14.163 5.101L21.06 20 20 21.06l-3.899-3.898A8 8 0 0 1 3 11m8.75-.75V7h-1.5v3.25H7v1.5h3.25V15h1.5v-3.25H15v-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconZoomFill;
