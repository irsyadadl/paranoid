import * as React from "react";
const SvgIconCloudy = (props) => (
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
      d="M18.615 10a4.13 4.13 0 0 0 .58-2.117c0-2.282-1.841-4.133-4.112-4.133a4.12 4.12 0 0 0-3.979 3.09m5.521 3.11q-.585.001-1.128.14c-.553.139-1.17-.071-1.49-.542a6.2 6.2 0 0 0-2.982-2.326 6.1 6.1 0 0 0-2.108-.372c-3.406 0-6.167 2.776-6.167 6.2s2.76 6.2 6.167 6.2h7.708c2.554 0 4.625-2.082 4.625-4.65a4.65 4.65 0 0 0-2.838-4.29 4.6 4.6 0 0 0-1.787-.36"
    />
  </svg>
);
export default SvgIconCloudy;
