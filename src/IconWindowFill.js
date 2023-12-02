import * as React from "react";
const SvgIconWindowFill = ({ title, titleId, ...props }) => (
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
      d="M22 4H2v5.5h20zM4.75 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m1.75.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M9.75 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M2 20v-9h20v9z" />
  </svg>
);
export default SvgIconWindowFill;
