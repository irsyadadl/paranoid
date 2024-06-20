import * as React from "react";
const SvgIconWallet2Fill = (props) => (
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
      d="M2 5.75C2 4.784 2.784 4 3.75 4h16.5c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25zm1.75-.25a.25.25 0 0 0-.25.25V7h17V5.75a.25.25 0 0 0-.25-.25zm16.75 3h-17V10h5.25a.75.75 0 0 1 .75.75v1.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 .75-.75h5.25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconWallet2Fill;
