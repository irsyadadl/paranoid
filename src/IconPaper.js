import * as React from "react";
const SvgIconPaper = (props) => (
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
      d="m12 6.312-8.032-1.79a1 1 0 0 0-1.218.975v12.389a1 1 0 0 0 .782.976L12 20.75m0-14.438 8.032-1.79a1 1 0 0 1 1.218.975v12.389a1 1 0 0 1-.782.976L12 20.75m0-14.438V20.75"
    />
  </svg>
);
export default SvgIconPaper;
