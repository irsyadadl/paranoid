import * as React from "react";
const SvgIconSketchbookFill = ({ title, titleId, ...props }) => (
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
      d="M3.5 2.5h17v19h-17zM8 7h8v1.5H8zm0 4h5v1.5H8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSketchbookFill;
