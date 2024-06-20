import * as React from "react";
const SvgIconAttentionFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.537 3a1.75 1.75 0 0 0-1.701 1.338L2.02 20.073a.75.75 0 1 0 1.458.354l.71-2.927h8.956l-.624 2.573a.75.75 0 1 0 1.458.354l.71-2.927h5.123l.71 2.927a.75.75 0 1 0 1.457-.354L18.164 4.338A1.75 1.75 0 0 0 16.464 3zm9.713 3.933L15.052 16h4.396z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconAttentionFill;
