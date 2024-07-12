import * as React from "react";
const SvgIconArrowWallUp = (props) => (
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
      d="M16.25 11 12 6.75m0 0L7.75 11M12 6.75v14.5m7.25-18.5H4.75"
    />
  </svg>
);
export default SvgIconArrowWallUp;
