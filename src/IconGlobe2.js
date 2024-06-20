import * as React from "react";
const SvgIconGlobe2 = (props) => (
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
      strokeWidth={1.5}
      d="M12 21.25a9.25 9.25 0 0 0 0-18.5m0 18.5a9.25 9.25 0 0 1 0-18.5m0 18.5c-2.347 0-4.25-4.141-4.25-9.25S9.653 2.75 12 2.75m0 18.5c2.347 0 4.25-4.141 4.25-9.25S14.347 2.75 12 2.75M21 12H3"
    />
  </svg>
);
export default SvgIconGlobe2;
