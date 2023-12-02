import * as React from "react";
const SvgIconSendFill = ({ title, titleId, ...props }) => (
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
      d="m14.003 23.145 7.77-20.918L.855 9.997l9.563 3.585 3.585 9.563Z"
    />
  </svg>
);
export default SvgIconSendFill;
