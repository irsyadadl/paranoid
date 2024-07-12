import * as React from "react";
const SvgIconWallet3 = (props) => (
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
      d="M21.25 10.75v7.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1v-7.5m18.5 0h-2.5m2.5 0v-5a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v5m0 0h2.5m0 0h2.19a1 1 0 0 1 .565.174l1.684 1.152a1 1 0 0 0 .565.174h3.492a1 1 0 0 0 .565-.174l1.684-1.152a1 1 0 0 1 .564-.174h2.191m-13.5 0v-3a.5.5 0 0 1 .5-.5h12.5a.5.5 0 0 1 .5.5v3"
    />
  </svg>
);
export default SvgIconWallet3;
