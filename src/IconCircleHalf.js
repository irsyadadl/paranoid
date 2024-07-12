import * as React from "react";
const SvgIconCircleHalf = (props) => (
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
      d="M12 20.5a8.5 8.5 0 0 0 0-17zM22 12c0 5.523-4.477 10-10 10q-.41 0-.81-.032C6.046 21.555 2 17.25 2 12s4.046-9.555 9.19-9.968Q11.59 2 12 2c5.523 0 10 4.477 10 10"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCircleHalf;
