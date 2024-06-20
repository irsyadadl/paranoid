import * as React from "react";
const SvgIconCircleArrowRightFill = (props) => (
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
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1.53 6.22 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06l1.97-1.97H7.75a.75.75 0 0 1 0-1.5h6.69l-1.97-1.97a.75.75 0 0 1 1.06-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCircleArrowRightFill;
