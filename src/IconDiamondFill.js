import * as React from "react";
const SvgIconDiamondFill = ({ title, titleId, ...props }) => (
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
      d="M7.078 3h9.844l6.884 7.005L12 21.81.194 10.005zm2.483 4.75L7.31 10l2.25 2.25-1.06 1.06L5.19 10 8.5 6.69l1.06 1.06Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconDiamondFill;
