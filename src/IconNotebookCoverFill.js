import * as React from "react";
const SvgIconNotebookCoverFill = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" d="M3.5 21.5v-19H7v19z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.5 21.5h12v-19h-12zM12 7v1.5h5V7zm0 4v1.5h5V11z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconNotebookCoverFill;
