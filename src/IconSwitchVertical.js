import * as React from "react";
const SvgIconSwitchVertical = ({ title, titleId, ...props }) => (
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
      d="m3.25 7.75 4-4 4 4m1.5 8.5 4 4 4-4M7.25 5v15.25m9.5-16.5v15.5"
    />
  </svg>
);
export default SvgIconSwitchVertical;
