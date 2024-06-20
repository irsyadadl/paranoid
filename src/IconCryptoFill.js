import * as React from "react";
const SvgIconCryptoFill = (props) => (
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
      d="m8.625 9.907 3.25-1.876a.25.25 0 0 1 .25 0l3.25 1.876a.25.25 0 0 1 .125.217v3.752a.25.25 0 0 1-.125.217l-3.25 1.876a.25.25 0 0 1-.25 0l-3.25-1.876a.25.25 0 0 1-.125-.217v-3.752a.25.25 0 0 1 .125-.217"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.125-3.392-3.25-1.876a1.75 1.75 0 0 0-1.75 0l-3.25 1.876A1.75 1.75 0 0 0 7 10.124v3.752c0 .626.334 1.203.875 1.516l3.25 1.876a1.75 1.75 0 0 0 1.75 0l3.25-1.876A1.75 1.75 0 0 0 17 13.876v-3.752a1.75 1.75 0 0 0-.875-1.516"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCryptoFill;
