import * as React from "react";
const SvgIconBrandWebflow = (props) => (
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
      d="m24 4.827-7.339 14.347H9.768l3.071-5.946h-.138C10.167 16.517 6.387 18.682 1 19.174V13.31s3.446-.204 5.472-2.334H1v-6.15h6.15v5.059h.138L9.8 4.826h4.65v5.026h.139l2.607-5.026z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandWebflow;
