import * as React from "react";
const SvgIconLightBulbFill = ({ title, titleId, ...props }) => (
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
      d="M3.998 10A8 8 0 1 1 16 16.93V17H7.998v-.07a7.99 7.99 0 0 1-4-6.93Zm4 8.5v.499a4.001 4.001 0 1 0 8.002 0V18.5H7.998Z"
    />
  </svg>
);
export default SvgIconLightBulbFill;
