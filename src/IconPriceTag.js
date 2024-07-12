import * as React from "react";
const SvgIconPriceTag = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 11.579V3.75a1 1 0 0 1 1-1h7.829a1 1 0 0 1 .707.293l8.757 8.757a1 1 0 0 1 0 1.414l-7.83 7.829a1 1 0 0 1-1.413 0l-8.757-8.757a1 1 0 0 1-.293-.707Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
);
export default SvgIconPriceTag;
