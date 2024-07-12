import * as React from "react";
const SvgIconBitcoin = (props) => (
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
      d="M9.75 8.25V12m0-3.75h-1.5m1.5 0h3.625a1.875 1.875 0 0 1 0 3.75M9.75 12v3.75m0-3.75h3.625M9.75 15.75h-1.5m1.5 0h3.625a1.875 1.875 0 0 0 0-3.75M12 6.75v1.5m0 7.5v1.5M21.25 12a9.25 9.25 0 1 1-18.5 0 9.25 9.25 0 0 1 18.5 0"
    />
  </svg>
);
export default SvgIconBitcoin;
