import * as React from "react";
const SvgIconWallet = (props) => (
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
      d="M19.25 6.5v-.75a1 1 0 0 0-1-1H3.95c-.69 0-1.25.56-1.25 1.25m0 0v11.25a2 2 0 0 0 2 2h15.5a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1H3.95C3.26 7.25 2.7 6.69 2.7 6m14.55 7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
  </svg>
);
export default SvgIconWallet;
