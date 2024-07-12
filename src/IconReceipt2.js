import * as React from "react";
const SvgIconReceipt2 = (props) => (
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
      d="M6.75 9.75A.75.75 0 0 1 7.5 9h9a.75.75 0 1 1 0 1.5h-9a.75.75 0 0 1-.75-.75m.75 3.75h9a.75.75 0 1 0 0-1.5h-9a.75.75 0 1 0 0 1.5m14.25-8.25V19.5a.75.75 0 0 1-1.086.67L18 18.838l-2.664 1.332a.75.75 0 0 1-.672 0L12 18.838 9.336 20.17a.75.75 0 0 1-.672 0L6 18.838 3.336 20.17a.75.75 0 0 1-1.086-.67V5.25a1.5 1.5 0 0 1 1.5-1.5h16.5a1.5 1.5 0 0 1 1.5 1.5m-1.5 0H3.75v13.037l1.914-.958a.75.75 0 0 1 .672 0L9 18.662l2.664-1.333a.75.75 0 0 1 .672 0L15 18.662l2.664-1.333a.75.75 0 0 1 .672 0l1.914.958z"
    />
  </svg>
);
export default SvgIconReceipt2;
