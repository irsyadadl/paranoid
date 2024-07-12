import * as React from "react";
const SvgIconForwardRight = (props) => (
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
      d="M12.992 11.559V6.673a1 1 0 0 1 1.65-.76l6.221 5.327a1 1 0 0 1 0 1.52l-6.22 5.326a1 1 0 0 1-1.65-.76v-4.885m0-.882L6.4 5.913a1 1 0 0 0-1.65.76v10.654a1 1 0 0 0 1.65.76l6.592-5.646m0-.882v.882"
    />
  </svg>
);
export default SvgIconForwardRight;
