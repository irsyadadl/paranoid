import * as React from "react";
const SvgIconGrid4Fill = ({ title, titleId, ...props }) => (
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
      d="M3 3v8h8V3zm10 0v8h8V3zM3 13v8h8v-8zm10 0v8h8v-8z"
    />
  </svg>
);
export default SvgIconGrid4Fill;
