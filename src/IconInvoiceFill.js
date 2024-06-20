import * as React from "react";
const SvgIconInvoiceFill = (props) => (
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
      d="M2.625 12a.75.75 0 1 1 0-1.5H5.25a.75.75 0 1 0 0-1.5h-1.5a2.25 2.25 0 1 1 0-4.5.75.75 0 0 1 1.5 0H6A.75.75 0 0 1 6 6H3.75a.75.75 0 0 0 0 1.5h1.5a2.25 2.25 0 1 1 0 4.5.75.75 0 1 1-1.5 0zM21 4.5H9A.75.75 0 0 0 9 6h11.25v3H9.75a.75.75 0 0 0 0 1.5H15v3H7.5a.75.75 0 1 0 0 1.5H15v3H3.75v-3.75a.75.75 0 1 0-1.5 0V18a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25A.75.75 0 0 0 21 4.5"
    />
  </svg>
);
export default SvgIconInvoiceFill;
