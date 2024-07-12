import * as React from "react";
const SvgIconBitcoinFill = (props) => (
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
      d="M13.375 15a1.125 1.125 0 0 0 0-2.25H10.5V15zM10.5 11.25V9h2.875a1.125 1.125 0 0 1 0 2.25z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m6.25-4.5a.75.75 0 0 0 0 1.5H9v6h-.75a.75.75 0 0 0 0 1.5h3v.75a.75.75 0 0 0 1.5 0v-.75h.625a2.625 2.625 0 0 0 1.837-4.5 2.625 2.625 0 0 0-1.837-4.5h-.625v-.75a.75.75 0 0 0-1.5 0v.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBitcoinFill;
