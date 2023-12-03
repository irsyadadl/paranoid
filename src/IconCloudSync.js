import * as React from "react";
const SvgIconCloudSync = ({ title, titleId, ...props }) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.995 11.002a6 6 0 0 0-11.668-2.21A5.251 5.251 0 0 0 7 19.25h11.125a4.125 4.125 0 1 0-.13-8.248Z"
    />
    <path
      fill="currentColor"
      d="M12 11.75 14.25 10 12 8.25v1a3.5 3.5 0 1 0 3.5 3.5H14a2 2 0 1 1-2-2z"
    />
  </svg>
);
export default SvgIconCloudSync;
