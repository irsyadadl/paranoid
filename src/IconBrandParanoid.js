import * as React from "react";
const SvgIconBrandParanoid = (props) => (
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
      strokeWidth={1.091}
      d="M5.667 5.25h-.5v4.835h9.42v9.498H19.5V5.25z"
    />
  </svg>
);
export default SvgIconBrandParanoid;
