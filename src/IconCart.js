import * as React from "react";
const SvgIconCart = (props) => (
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
      d="M1.75 3.75h2.147a1 1 0 0 1 .988.842L5.23 6.75m0 0 1.385 8.658a1 1 0 0 0 .988.842h10.292a1 1 0 0 0 .988-.844l1.276-8.078a.5.5 0 0 0-.494-.578z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.25}
      d="M8.25 20.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m9 0a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25"
    />
  </svg>
);
export default SvgIconCart;
