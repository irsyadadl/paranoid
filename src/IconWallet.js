import * as React from "react";
const SvgIconWallet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 6.5v10.75a3 3 0 0 0 3 3h12.5a1 1 0 0 0 1-1v-9.5a1 1 0 0 0-1-1h-3M3.75 6.5A2.25 2.25 0 0 0 6 8.75h10.25M3.75 6.5A2.75 2.75 0 0 1 6.5 3.75h8.969c.431 0 .781.35.781.781V8.75"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M15.5 15.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
    />
  </svg>
);
export default SvgIconWallet;
