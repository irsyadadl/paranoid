import * as React from "react";
const SvgIconCut = (props) => (
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
      d="M6 3a4 4 0 1 0 2.845 6.812L11.883 12l-3.038 2.188a4 4 0 1 0 .837 1.246L22.547 6.17l-.48-.227a2 2 0 0 0-2.026.183l-6.874 4.95-3.485-2.51A4 4 0 0 0 6 3M3.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m0 10a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M22.067 18.057a2 2 0 0 1-2.026-.183l-5.59-4.026 1.283-.924 6.813 4.906z"
    />
  </svg>
);
export default SvgIconCut;
