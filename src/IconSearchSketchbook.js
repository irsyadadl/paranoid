import * as React from "react";
const SvgIconSearchSketchbook = (props) => (
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
      d="M7.75 14.75h1.5m-1.5-8h7.5m-7.5 4h3.5m8.121 9.614a3 3 0 1 1-4.242-4.243 3 3 0 0 1 4.242 4.243m0 0 1.879 1.879m-2-9.743V3.745a1 1 0 0 0-1-1H4.755a1 1 0 0 0-1 1v16.501a1 1 0 0 0 1 1H12"
    />
  </svg>
);
export default SvgIconSearchSketchbook;
