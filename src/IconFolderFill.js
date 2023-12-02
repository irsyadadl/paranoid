import * as React from "react";
const SvgIconFolderFill = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" d="M10.401 3H2v17h20V6h-9.599z" />
  </svg>
);
export default SvgIconFolderFill;
