import * as React from "react";
const SvgIconPoundFill = ({ title, titleId, ...props }) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m8.596-2.611c0-1.017.864-1.889 1.99-1.889.55 0 1.043.21 1.4.547l.546.514L15.56 7.47l-.546-.514A3.535 3.535 0 0 0 12.586 6c-1.9 0-3.49 1.491-3.49 3.389 0 .734.23 1.385.488 1.889H8v1.5h1.88L8.19 17h6.79v-1.5h-4.574l1.09-2.722h3.483v-1.5h-3.615a4.182 4.182 0 0 1-.302-.429c-.25-.409-.466-.924-.466-1.46Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconPoundFill;
