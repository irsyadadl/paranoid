import * as React from "react";
const SvgIconArrowBottom = ({ title, titleId, ...props }) => (
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
      d="m19 14-7 7-7-7m7-10.25V20.5"
    />
  </svg>
);
export default SvgIconArrowBottom;
