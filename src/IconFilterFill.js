import * as React from "react";
const SvgIconFilterFill = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" d="M3 3v5.31l6 6v7.625l6-1.333V14.31l6-6V3z" />
  </svg>
);
export default SvgIconFilterFill;
