import * as React from "react";
const SvgIconBack = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.75 19.25V4.75m13.725.012-10.342 6.82a.5.5 0 0 0 0 .836l10.342 6.82a.5.5 0 0 0 .775-.417V5.18a.5.5 0 0 0-.775-.417Z"
    />
  </svg>
);
export default SvgIconBack;
