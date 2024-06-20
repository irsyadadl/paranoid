import * as React from "react";
const SvgIconYes = (props) => (
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
      d="M6.75 10.75h-3a1 1 0 0 0-1 1v7.5a1 1 0 0 0 1 1h3m0 0V11l3.97-7.708c.172-.333.516-.542.891-.542a2.003 2.003 0 0 1 1.98 2.308l-.575 3.692h5.243a3 3 0 0 1 2.966 3.451l-.837 5.5a3 3 0 0 1-2.966 2.549z"
    />
  </svg>
);
export default SvgIconYes;
