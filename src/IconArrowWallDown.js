import * as React from "react";
const SvgIconArrowWallDown = (props) => (
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
      d="M16.25 13 12 17.25m0 0L7.75 13M12 17.25V2.75m7.25 18.5H4.75"
    />
  </svg>
);
export default SvgIconArrowWallDown;
