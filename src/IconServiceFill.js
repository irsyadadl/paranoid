import * as React from "react";
const SvgIconServiceFill = (props) => (
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
      d="M16.888 3.112c.25-.25.166-.675-.173-.78a7.5 7.5 0 0 0-9.129 10.08l-5.099 5.1a1.75 1.75 0 0 0 0 2.475l1.526 1.526a1.75 1.75 0 0 0 2.474 0l5.1-5.1a7.5 7.5 0 0 0 10.08-9.129c-.104-.339-.528-.423-.78-.172L18 10a2.828 2.828 0 1 1-4-4z"
    />
  </svg>
);
export default SvgIconServiceFill;
