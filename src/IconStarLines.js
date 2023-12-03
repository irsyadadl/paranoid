import * as React from "react";
const SvgIconStarLines = ({ title, titleId, ...props }) => (
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
      d="m9.25 15.75-4.5 4.5m2.5-9.5-4.5 4.5m13.5.5-4.5 4.5m3.75-18.5 2.057 3.418 3.887.9-2.615 3.014.345 3.974L15.5 11.5l-3.674 1.556.345-3.974-2.615-3.013 3.887-.9z"
    />
  </svg>
);
export default SvgIconStarLines;
