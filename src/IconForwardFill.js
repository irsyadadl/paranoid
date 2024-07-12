import * as React from "react";
const SvgIconForwardFill = (props) => (
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
      d="M11.748 4.37c0-1.08 1.28-1.652 2.085-.93l8.501 7.63a1.25 1.25 0 0 1 0 1.86l-8.501 7.63c-.805.722-2.085.15-2.085-.93v-3.375c-3.743.05-5.702.482-6.88 1.148-1.196.675-1.672 1.629-2.425 3.135l-.024.047a.75.75 0 0 1-1.421-.335c0-4.265.552-7.455 2.37-9.554 1.738-2.004 4.473-2.845 8.38-2.937z"
    />
  </svg>
);
export default SvgIconForwardFill;
