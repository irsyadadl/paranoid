import * as React from "react";
const SvgIconCompass = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.466 17.153a1 1 0 0 0 .687-.687l3.6-12.6a.5.5 0 0 0-.618-.619l-12.6 3.6a1 1 0 0 0-.688.687l-3.6 12.6a.5.5 0 0 0 .618.619l12.6-3.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgIconCompass;