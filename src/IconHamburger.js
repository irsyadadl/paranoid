import * as React from "react";
const SvgIconHamburger = ({ title, titleId, ...props }) => (
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
      d="M2.75 12h18.5M2.75 5.75h18.5m-18.5 12.5h18.5"
    />
  </svg>
);
export default SvgIconHamburger;
