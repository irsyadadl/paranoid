import * as React from "react";
const SvgIconControlFill = (props) => (
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
      d="M3 6.75A3.75 3.75 0 0 1 6.75 3h10.5A3.75 3.75 0 0 1 21 6.75v10.5A3.75 3.75 0 0 1 17.25 21H6.75A3.75 3.75 0 0 1 3 17.25zm11.53.47a.75.75 0 0 0-1.06 0l-2.25 2.25a.75.75 0 1 0 1.06 1.06L14 8.81l1.72 1.72a.75.75 0 1 0 1.06-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconControlFill;
