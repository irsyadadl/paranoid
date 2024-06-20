import * as React from "react";
const SvgIconBookFill = (props) => (
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
      d="M6.75 2A2.75 2.75 0 0 0 4 4.75v14.5A2.75 2.75 0 0 0 6.75 22h11.5A1.75 1.75 0 0 0 20 20.25V3.75A1.75 1.75 0 0 0 18.25 2zM5.5 19v.25c0 .69.56 1.25 1.25 1.25h11.5a.25.25 0 0 0 .25-.25v-2.768a2 2 0 0 1-.25.018H7A1.5 1.5 0 0 0 5.5 19M8.75 6.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM8 11a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 8 11"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBookFill;
