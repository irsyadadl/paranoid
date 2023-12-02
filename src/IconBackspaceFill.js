import * as React from "react";
const SvgIconBackspaceFill = ({ title, titleId, ...props }) => (
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
      d="M7.356 4 1.84 12l5.517 8H22V4zm3.892 4.94 2.002 2.001 2.002-2.002L16.312 10l-2.001 2.002 2 2-1.061 1.06-2-2-2 2-1.06-1.06 2-2L10.187 10l1.06-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBackspaceFill;
