import * as React from "react";
const SvgIconEthereumFill = (props) => (
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
      d="m11.737 14.202-1.66-.622L12 16.225l1.924-2.645-1.66.622a.75.75 0 0 1-.527 0M12 12.699l2.814-1.055L12 7.775l-2.814 3.869z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10.607-5.941a.75.75 0 0 0-1.214 0l-4 5.5a.75.75 0 0 0 0 .882l4 5.5a.75.75 0 0 0 1.214 0l4-5.5a.75.75 0 0 0 0-.882z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconEthereumFill;
