import * as React from "react";
const SvgIconAddToBasket = (props) => (
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
      d="M17.75 8.75h3.5l-.521 2.998M17.75 8.75H6.25m11.5 0-2-5m-9.5 5h-3.5l1.856 10.671a1 1 0 0 0 .985.829h4.659m-4-11.5 2-5M13.75 18H17m0 0h3.25M17 18v-3.25M17 18v3.25"
    />
  </svg>
);
export default SvgIconAddToBasket;
