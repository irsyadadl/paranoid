import * as React from "react";
const SvgIconSunriseArrowUp = (props) => (
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
      d="M2.754 20.25h18.5M12 8.25V3M2.75 16.25h1.5m15.5 0h1.5M9.5 5.255l2.5-2.5 2.5 2.5M7.75 16.25V16a4.25 4.25 0 0 1 8.5 0v.25m1.688-5.232 1.149-.964m-14.173 0 1.15.964"
    />
  </svg>
);
export default SvgIconSunriseArrowUp;
