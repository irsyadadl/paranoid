import * as React from "react";
const SvgIconRenew = (props) => (
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
      d="M13 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8-10a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1.07 3.268a1 1 0 1 1-1 1.732 1 1 0 0 1 1-1.732m-2.562 5.026a1 1 0 1 0-1-1.732 1 1 0 0 0 1 1.732M18.927 8a1 1 0 1 1-1-1.732 1 1 0 0 1 1 1.732"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 14.75v5.5h-5.5M9 19.688a8.25 8.25 0 1 1 6.25-15.273"
    />
  </svg>
);
export default SvgIconRenew;
