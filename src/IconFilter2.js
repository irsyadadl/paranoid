import * as React from "react";
const SvgIconFilter2 = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M2.75 4.75h18.5m-12.5 14.5h6.5M5.75 12h12.5"
    />
  </svg>
);
export default SvgIconFilter2;
