import * as React from "react";
const SvgIconArrowUpRightFill = (props) => (
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
      d="M8 6.25C8 5.56 8.56 5 9.25 5h8.5c.69 0 1.25.56 1.25 1.25v8.5a1.25 1.25 0 1 1-2.5 0V9.268l-9.366 9.366a1.25 1.25 0 0 1-1.768-1.768L14.732 7.5H9.25C8.56 7.5 8 6.94 8 6.25"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArrowUpRightFill;
