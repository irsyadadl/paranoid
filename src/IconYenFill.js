import * as React from "react";
const SvgIconYenFill = (props) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m7.064-4.494a.75.75 0 1 0-1.128.988l3.286 3.756H9.75a.75.75 0 0 0 0 1.5h1.5v3.5a.75.75 0 0 0 1.5 0v-3.5h1.5a.75.75 0 0 0 0-1.5h-1.472l3.286-3.756a.75.75 0 1 0-1.128-.988L12 10.861z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconYenFill;
