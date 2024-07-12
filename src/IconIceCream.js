import * as React from "react";
const SvgIconIceCream = (props) => (
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
      d="M18.25 9.5V5.75a4 4 0 0 0-4-4h-4.5a4 4 0 0 0-4 4v10.5a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1zm0 0s-1.666 1.43-2.896 1.78c-2.306.653-3.706-1.21-5.794-.956-1.508.184-2.868 1.28-3.81 2.41m4.5 4.516h3.5v3.25a1.75 1.75 0 1 1-3.5 0z"
    />
  </svg>
);
export default SvgIconIceCream;
