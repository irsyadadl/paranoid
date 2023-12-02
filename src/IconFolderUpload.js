import * as React from "react";
const SvgIconFolderUpload = ({ title, titleId, ...props }) => (
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
      d="M12 19.25V13m0 0 2.5 2.5M12 13l-2.5 2.5m-1.25 3.75h-5.5V3.75H10l2 3h9.25v12.5h-5.5"
    />
  </svg>
);
export default SvgIconFolderUpload;
