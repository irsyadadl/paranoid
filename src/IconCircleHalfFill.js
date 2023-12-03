import * as React from "react";
const SvgIconCircleHalfFill = ({ title, titleId, ...props }) => (
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
      d="M12 3.5a8.5 8.5 0 0 0 0 17zM2 12C2 6.477 6.477 2 12 2c.273 0 .543.01.81.032C17.954 2.445 22 6.75 22 12s-4.046 9.555-9.19 9.968c-.267.021-.537.032-.81.032-5.523 0-10-4.477-10-10"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCircleHalfFill;
