import * as React from "react";
const SvgIconJudgeGavel = (props) => (
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
      d="M15.25 20.25h1m-1 0-.772-2.316a1 1 0 0 0-.949-.684H5.471a1 1 0 0 0-.949.684L3.75 20.25m11.5 0H3.75m-1 0h1m-2-7h2.5m1.25-3.5-2-1.5m12.375 1.125-2.668 2.668a1 1 0 0 1-1.414 0l-1.336-1.336a1 1 0 0 1 0-1.414l5.336-5.336a1 1 0 0 1 1.414 0l1.336 1.336a1 1 0 0 1 0 1.414zm0 0 4.875 4.875"
    />
  </svg>
);
export default SvgIconJudgeGavel;
