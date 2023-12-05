import * as React from "react";
const SvgIconHighlight = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 21.25h8.5M2.75 17v4.25H7L21.25 7 17 2.75z"
    />
  </svg>
);
export default SvgIconHighlight;
