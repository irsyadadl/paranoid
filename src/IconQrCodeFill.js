import * as React from "react";
const SvgIconQrCodeFill = ({ title, titleId, ...props }) => (
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
      d="M3 3h8v8H3zm1.5 1.5v5h5v-5zM13 3h8v8h-8zm1.5 1.5v5h5v-5zM3 13h8v8H3zm1.5 1.5v5h5v-5zm10-1.5v2.5H17V17h-4v-4zm4 5.5V21H17v-4h4v1.5zM17 13h4v1.5h-4z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M13 19h2v2h-2zm-7.5-3.5h3v3h-3zm0-10h3v3h-3zm10 0h3v3h-3z"
    />
  </svg>
);
export default SvgIconQrCodeFill;
