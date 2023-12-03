import * as React from "react";
const SvgIconThumbsDown = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="M17.252 13.25h3.998v-9.5h-3.998m0 0V13l-4.248 8.25h-.615a2 2 0 0 1-1.975-2.308l.575-3.692H5.75a3 3 0 0 1-2.964-3.451l.836-5.5A2.999 2.999 0 0 1 6.586 3.75h10.666Z"
    />
  </svg>
);
export default SvgIconThumbsDown;
