import * as React from "react";
const SvgIconLocation = (props) => (
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
      d="M14.75 10a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M19.25 10c0 6.076-7.25 11.393-7.25 11.393S4.75 16.076 4.75 10a7.25 7.25 0 0 1 14.5 0Z"
    />
  </svg>
);
export default SvgIconLocation;
