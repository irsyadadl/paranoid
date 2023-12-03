import * as React from "react";
const SvgIconAdjustmentFill = ({ title, titleId, ...props }) => (
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
      d="M17 3a4 4 0 0 0-3.93 3.25H3v1.5h10.07A4 4 0 1 0 17 3M9 13a4 4 0 0 0-3.93 3.25H3v1.5h2.07a4 4 0 0 0 7.86 0H21v-1.5h-8.07A4 4 0 0 0 9 13"
    />
  </svg>
);
export default SvgIconAdjustmentFill;
