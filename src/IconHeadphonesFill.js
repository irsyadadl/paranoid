import * as React from "react";
const SvgIconHeadphonesFill = ({ title, titleId, ...props }) => (
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
      d="M4.5 12a7.5 7.5 0 1 1 15 0v1h-3.25a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V12a9 9 0 0 0-8.25-8.97V3H12a9 9 0 0 0-9 9v8.25c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75H4.5z"
    />
  </svg>
);
export default SvgIconHeadphonesFill;
