import * as React from "react";
const SvgIconLightBulb = (props) => (
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
      d="M8.748 17.75v-.65a1.09 1.09 0 0 0-.539-.916A7.24 7.24 0 0 1 4.748 10a7.25 7.25 0 1 1 11.04 6.183 1.09 1.09 0 0 0-.538.916v.65m-6.502 0v1.249a3.251 3.251 0 1 0 6.502 0V17.75m-6.502 0h6.502"
    />
  </svg>
);
export default SvgIconLightBulb;
