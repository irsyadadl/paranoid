import * as React from "react";
const SvgIconMap = (props) => (
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m15.25 6.5-6.5-2-6 2v13l6-2m6.5-11 6-2v13l-6 2-6.5-2m6.5-11V19m-6.5-1.5V5"
    />
  </svg>
);
export default SvgIconMap;
