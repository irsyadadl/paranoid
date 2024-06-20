import * as React from "react";
const SvgIconBrandParanoid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeWidth={1.2}
      d="M4.4 3.9h-.6v5.802h11.305V21.1H21V3.9z"
    />
  </svg>
);
export default SvgIconBrandParanoid;
