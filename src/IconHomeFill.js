import * as React from "react";
const SvgIconHomeFill = ({ title, titleId, ...props }) => (
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
      d="M21 8.645 12 1.28 3 8.645V21h18zM7 15.5V17h10v-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHomeFill;
