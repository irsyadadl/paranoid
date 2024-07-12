import * as React from "react";
const SvgIconWallet2 = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.75 7.75v-2a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v2m-18.5 0h18.5m-18.5 0v3m18.5-3v3m0 0v7.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1v-7.5m18.5 0h-6v1.5a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-1.5h-6"
    />
  </svg>
);
export default SvgIconWallet2;
