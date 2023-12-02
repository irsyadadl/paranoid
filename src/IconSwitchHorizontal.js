import * as React from "react";
const SvgIconSwitchHorizontal = ({ title, titleId, ...props }) => (
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
      d="m7.75 3.25-4 4 4 4m8.5 1.5 4 4-4 4M5 7.25h15.25m-16.5 9.5h15.5"
    />
  </svg>
);
export default SvgIconSwitchHorizontal;
