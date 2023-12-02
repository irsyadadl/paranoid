import * as React from "react";
const SvgIconTruck = ({ title, titleId, ...props }) => (
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
      d="M10 16.25h4.5m-9.786 0H2.75V10L5 6.75h3.75V15m10.606 1.25h1.894V4.75H8.75v2.09m1 9.91a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm9.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </svg>
);
export default SvgIconTruck;
