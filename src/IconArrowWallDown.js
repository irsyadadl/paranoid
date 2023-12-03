import * as React from "react";
const SvgIconArrowWallDown = ({ title, titleId, ...props }) => (
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
      d="M16.75 12.25 12 17m0 0-4.75-4.75M12 17V2m8 19.25H4"
    />
  </svg>
);
export default SvgIconArrowWallDown;