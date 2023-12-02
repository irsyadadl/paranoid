import * as React from "react";
const SvgIconBag2Fill = ({ title, titleId, ...props }) => (
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
      d="M8 6a4 4 0 1 1 8 0v1h2.397l2.222 15H3.381L5.603 7H8zm1.5 1h5V6a2.5 2.5 0 0 0-5 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBag2Fill;
