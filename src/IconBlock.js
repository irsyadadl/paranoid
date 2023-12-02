import * as React from "react";
const SvgIconBlock = ({ title, titleId, ...props }) => (
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.54 5.46A9.25 9.25 0 0 0 5.46 18.54M18.541 5.459A9.25 9.25 0 0 1 5.46 18.54M18.54 5.46 5.46 18.54"
    />
  </svg>
);
export default SvgIconBlock;
