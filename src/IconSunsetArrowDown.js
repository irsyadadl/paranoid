import * as React from "react";
const SvgIconSunsetArrowDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.754 20.25h18.5M12 8V2.75m-9.25 13.5h1.5m15.5 0h1.5m-3.313-5.232 1.15-.964m-14.173 0 1.15.964M9.5 6 12 8.5 14.5 6M7.75 16.25V16a4.25 4.25 0 0 1 8.5 0v.25"
    />
  </svg>
);
export default SvgIconSunsetArrowDown;
