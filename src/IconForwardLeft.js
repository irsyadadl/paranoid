import * as React from "react";
const SvgIconForwardLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.01 12.441v4.886a1 1 0 0 1-1.651.76l-6.22-5.328a1 1 0 0 1 0-1.519l6.22-5.327a1 1 0 0 1 1.65.76v4.886m0 .882 6.592 5.645a1 1 0 0 0 1.65-.76V6.674a1 1 0 0 0-1.65-.76L11.01 11.56m0 .882v-.882"
    />
  </svg>
);
export default SvgIconForwardLeft;
