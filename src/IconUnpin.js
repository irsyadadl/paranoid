import * as React from "react";
const SvgIconUnpin = (props) => (
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
      d="m11.702 7.146 2.149-3.76a1 1 0 0 1 1.575-.21l5.398 5.398a1 1 0 0 1-.21 1.576l-3.76 2.148m-8.479 3.327 4.423 4.423a1 1 0 0 0 1.669-.432l1.142-3.998m-7.234.007-4.423-4.423a1 1 0 0 1 .432-1.669l3.991-1.14m0 7.232.007-.007m-.007.007L3.75 20.25m-1-17.5 18.5 18.5"
    />
  </svg>
);
export default SvgIconUnpin;
