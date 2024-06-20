import * as React from "react";
const SvgIconLiquid = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 14.056c0 3.973-3.246 7.194-7.25 7.194s-7.25-3.221-7.25-7.194c0-4.643 4.89-9.454 6.638-11.025a.907.907 0 0 1 1.224 0c1.748 1.571 6.638 6.382 6.638 11.025Z"
    />
  </svg>
);
export default SvgIconLiquid;
