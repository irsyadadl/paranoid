import * as React from "react";
const SvgIconCircleHalfFill = (props) => (
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
      d="M12 3.5a8.5 8.5 0 0 0 0 17zM2 12C2 6.477 6.477 2 12 2q.41 0 .81.032C17.954 2.445 22 6.75 22 12s-4.046 9.555-9.19 9.968Q12.41 22 12 22C6.477 22 2 17.523 2 12"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCircleHalfFill;
