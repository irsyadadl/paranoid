import * as React from "react";
const SvgIconDiamond = ({ title, titleId, ...props }) => (
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
      d="M8.5 7.75 6.25 10l2.25 2.25M1.25 10l6.143-6.25h9.214L22.75 10 12 20.75z"
    />
  </svg>
);
export default SvgIconDiamond;
