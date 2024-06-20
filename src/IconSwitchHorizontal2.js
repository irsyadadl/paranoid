import * as React from "react";
const SvgIconSwitchHorizontal2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 3.25 4.03 6.72a.75.75 0 0 0 0 1.06l3.47 3.47m9 1.5 3.47 3.47a.75.75 0 0 1 0 1.06l-3.47 3.47M5 7.25h15.25m-16.5 9.5h15.5"
    />
  </svg>
);
export default SvgIconSwitchHorizontal2;
