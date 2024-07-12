import * as React from "react";
const SvgIconShieldCrossed = (props) => (
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
      d="m14.226 13.75-2.238-2.25m0 0L9.75 9.25m2.238 2.25 2.238-2.25m-2.238 2.25L9.75 13.75m10.5-1.838V6.221a1 1 0 0 0-.684-.949l-7.25-2.416a1 1 0 0 0-.632 0l-7.25 2.416a1 1 0 0 0-.684.949v5.691c0 4.973 4.25 7.338 8.25 9.496 4-2.158 8.25-4.523 8.25-9.496"
    />
  </svg>
);
export default SvgIconShieldCrossed;
