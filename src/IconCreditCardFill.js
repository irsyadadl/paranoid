import * as React from "react";
const SvgIconCreditCardFill = (props) => (
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
      d="M3.75 4.003A1.75 1.75 0 0 0 2 5.753V9h19.996v1.5H2v7.746c0 .967.784 1.75 1.75 1.75h16.496a1.75 1.75 0 0 0 1.75-1.75V9.053q0-1.65-.002-3.304a1.75 1.75 0 0 0-1.749-1.746zm3 8.497a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCreditCardFill;
