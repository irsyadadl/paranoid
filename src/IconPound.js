import * as React from "react";
const SvgIconPound = ({ title, titleId, ...props }) => (
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
      d="M14.5 7.501a2.786 2.786 0 0 0-1.914-.751c-1.514 0-2.74 1.181-2.74 2.639C9.846 10.846 11 12 11 12l-.011.028m3.24 4.222h-4.93l1.69-4.222m0 0H8.75m2.239 0h3.24M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0Z"
    />
  </svg>
);
export default SvgIconPound;
