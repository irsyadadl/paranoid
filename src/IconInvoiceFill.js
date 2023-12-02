import * as React from "react";
const SvgIconInvoiceFill = ({ title, titleId, ...props }) => (
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
      d="M4 2h16v20.53l-3.28-2.54-2.387 2.302L12 20.042l-2.333 2.25L7.28 19.99 4 22.53zm4 5h8v1.5H8zm0 4h4v1.5H8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconInvoiceFill;
