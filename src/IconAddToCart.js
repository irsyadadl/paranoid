import * as React from "react";
const SvgIconAddToCart = (props) => (
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
      d="m21.25 5.75-1.6 8.681a1 1 0 0 1-.983.819H6.82a1 1 0 0 1-.98-.804L3.66 3.554a1 1 0 0 0-.98-.804h-.93M9.5 7h3.25m0 0H16m-3.25 0V3.75m0 3.25v3.25M9.25 19a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m9 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
  </svg>
);
export default SvgIconAddToCart;
