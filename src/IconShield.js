import * as React from "react";
const SvgIconShield = ({ title, titleId, ...props }) => (
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
      d="M20.25 5.5 12 2.75 3.75 5.5v6.412c0 4.973 4.25 7.338 8.25 9.496 4-2.158 8.25-4.523 8.25-9.496z"
    />
  </svg>
);
export default SvgIconShield;
