import * as React from "react";
const SvgIconShieldCheck = (props) => (
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
      d="M9.25 11.5 11 13.25l3.75-3.75m5.5 2.412V6.221a1 1 0 0 0-.684-.949l-7.25-2.416a1 1 0 0 0-.632 0l-7.25 2.416a1 1 0 0 0-.684.949v5.691c0 4.973 4.25 7.338 8.25 9.496 4-2.158 8.25-4.523 8.25-9.496"
    />
  </svg>
);
export default SvgIconShieldCheck;
