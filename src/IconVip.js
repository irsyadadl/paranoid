import * as React from "react";
const SvgIconVip = (props) => (
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
      d="M4.149 18.45 1.75 6.75l6 3.5L12 3.75l4.25 6.5 6-3.5-2.399 11.7a1 1 0 0 1-.98.8H5.129a1 1 0 0 1-.98-.8Z"
    />
  </svg>
);
export default SvgIconVip;
