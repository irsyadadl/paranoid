import * as React from "react";
const SvgIconMailNotifyFill = (props) => (
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
      d="M20 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2.5 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20 11.563a5.5 5.5 0 0 1-1.16-.122A15.7 15.7 0 0 1 12 13 15.7 15.7 0 0 1 2 9.419v8.831c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 18.25v-7.058a5.5 5.5 0 0 1-2 .37Z"
    />
    <path
      fill="currentColor"
      d="M14.438 6c0-.705.13-1.38.37-2H3.75A1.75 1.75 0 0 0 2 5.75v1.652A14.2 14.2 0 0 0 12 11.5c1.727 0 3.383-.307 4.915-.87A5.56 5.56 0 0 1 14.438 6"
    />
  </svg>
);
export default SvgIconMailNotifyFill;
