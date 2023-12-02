import * as React from "react";
const SvgIconBullet = ({ title, titleId, ...props }) => (
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
    <circle
      cx={12}
      cy={12}
      r={9.25}
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgIconBullet;
