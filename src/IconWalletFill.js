import * as React from "react";
const SvgIconWalletFill = (props) => (
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
      fillRule="evenodd"
      d="M1.95 6a2 2 0 0 1 2-2h14.3c.966 0 1.75.784 1.75 1.75v.75h.2c.966 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 20.2 20H4.7a2.75 2.75 0 0 1-2.75-2.75zm1.5 0a.5.5 0 0 0 .5.5H18.5v-.75a.25.25 0 0 0-.25-.25H3.95a.5.5 0 0 0-.5.5M15 13.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconWalletFill;
