import * as React from "react";
const SvgIconCirclePlayFill = ({ title, titleId, ...props }) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M10.782 8.783a.5.5 0 0 0-.782.413v5.608a.5.5 0 0 0 .782.413l4.112-2.804a.5.5 0 0 0 0-.826l-4.112-2.804Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCirclePlayFill;
