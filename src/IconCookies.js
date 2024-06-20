import * as React from "react";
const SvgIconCookies = (props) => (
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
      d="M2 12C2 6.477 6.477 2 12 2q.586 0 1.153.066a.75.75 0 0 1 .65.892 2.75 2.75 0 0 0 2.327 3.268.75.75 0 0 1 .645.643 2.75 2.75 0 0 0 3.87 2.132.75.75 0 0 1 1.039.495c.206.8.316 1.64.316 2.504 0 5.523-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 8.394 7.156 4.25 4.25 0 0 1-5-3.05 4.25 4.25 0 0 1-3.144-4.102z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M10 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgIconCookies;
