import * as React from "react";
const SvgIconBookFill = ({ title, titleId, ...props }) => (
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
      d="M6.75 2A2.75 2.75 0 0 0 4 4.75v14.5A2.75 2.75 0 0 0 6.75 22H20V2zM5.5 19v.25c0 .69.56 1.25 1.25 1.25H18.5v-3H7A1.5 1.5 0 0 0 5.5 19M8 6.25v1.5h8v-1.5zm0 4h5v1.5H8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBookFill;
