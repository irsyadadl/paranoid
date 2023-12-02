import * as React from "react";
const SvgIconFolderDownloadFill = ({ title, titleId, ...props }) => (
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
      d="M2 3h8.401l2 3H22v14H2zm10 15.06L8.44 14.5l1.06-1.06 1.75 1.75V10h1.5v5.19l1.75-1.75 1.06 1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFolderDownloadFill;
