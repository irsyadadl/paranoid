import * as React from "react";
const SvgIconBackFill = (props) => (
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
      d="M18.062 19.865A1.25 1.25 0 0 0 20 18.82V5.18a1.25 1.25 0 0 0-1.938-1.044L7.72 10.956a1.25 1.25 0 0 0 0 2.087zM4 19.25a.75.75 0 0 0 1.5 0V4.75a.75.75 0 0 0-1.5 0z"
    />
  </svg>
);
export default SvgIconBackFill;
