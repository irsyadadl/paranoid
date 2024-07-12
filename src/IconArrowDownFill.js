import * as React from "react";
const SvgIconArrowDownFill = (props) => (
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
      d="M12 21a1.25 1.25 0 0 1-.884-.366l-5.75-5.75a1.25 1.25 0 0 1 1.768-1.768l3.616 3.616V4.25a1.25 1.25 0 0 1 2.5 0v12.482l3.616-3.616a1.25 1.25 0 0 1 1.768 1.768l-5.75 5.75A1.25 1.25 0 0 1 12 21"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconArrowDownFill;
