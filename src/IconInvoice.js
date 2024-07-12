import * as React from "react";
const SvgIconInvoice = (props) => (
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
      d="M2.625 12a.75.75 0 1 1 0-1.5H5.25a.75.75 0 1 0 0-1.5h-1.5a2.25 2.25 0 1 1 0-4.5.75.75 0 0 1 1.5 0H6A.75.75 0 0 1 6 6H3.75a.75.75 0 0 0 0 1.5h1.5a2.25 2.25 0 1 1 0 4.5.75.75 0 1 1-1.5 0zM21.75 5.25V18a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-3.75a.75.75 0 1 1 1.5 0V18H15v-3H7.5a.75.75 0 1 1 0-1.5H15v-3H9.75a.75.75 0 1 1 0-1.5h10.5V6H9a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75M16.5 13.5h3.75v-3H16.5zm3.75 4.5v-3H16.5v3z"
    />
  </svg>
);
export default SvgIconInvoice;
