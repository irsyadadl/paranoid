import * as React from "react";
const SvgIconNotes = ({ title, titleId, ...props }) => (
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
      d="M3.25 12h2m4.5 0h2.5m-2.5-3.75h4.5m-11 0h2m-2 7.5h2m-1-12.5h15.5v17.5H4.25z"
    />
  </svg>
);
export default SvgIconNotes;
