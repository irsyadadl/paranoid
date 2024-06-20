import * as React from "react";
const SvgIconUsb = (props) => (
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
      d="M10 5.75v1.5m4-1.5v1.5m-10.25 3h16.5v10a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1zm2-7.5h12.5v7.5H5.75z"
    />
  </svg>
);
export default SvgIconUsb;
