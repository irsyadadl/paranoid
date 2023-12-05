import * as React from "react";
const SvgIconWindow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M3 10.75h18M3 5h18.5v14.5H3z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.25}
      d="M5.75 8.375a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Zm2.5 0a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Zm2.5 0a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Z"
    />
  </svg>
);
export default SvgIconWindow;
