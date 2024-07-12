import * as React from "react";
const SvgIconHotDrinkCup = (props) => (
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
      d="m5.5 5.5.76-2.092a1 1 0 0 1 .94-.658h9.6a1 1 0 0 1 .94.658L18.5 5.5M4.75 8.98l1.08 11.365a1 1 0 0 0 .996.905h10.348a1 1 0 0 0 .995-.905L19.25 9M4.75 5.75h14.5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgIconHotDrinkCup;
