import * as React from "react";
const SvgIconWifi = (props) => (
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
      d="M21 7.822c-5.249-4.097-12.751-4.097-18 0m3.751 5.492c3.062-2.388 7.437-2.388 10.499 0"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M12 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
    />
  </svg>
);
export default SvgIconWifi;
