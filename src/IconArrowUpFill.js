import * as React from "react";
const SvgIconArrowUpFill = (props) => (
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
      d="M12 3c.332 0 .65.132.884.366l5.75 5.75a1.25 1.25 0 0 1-1.768 1.768L13.25 7.268V19.75a1.25 1.25 0 0 1-2.5 0V7.268l-3.616 3.616a1.25 1.25 0 0 1-1.768-1.768l5.75-5.75A1.25 1.25 0 0 1 12 3"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArrowUpFill;
