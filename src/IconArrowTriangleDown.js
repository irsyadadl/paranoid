import * as React from "react";
const SvgIconArrowTriangleDown = (props) => (
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
      d="M18.265 4.75H5.735c-.734 0-1.21.785-.877 1.449l6.265 12.505a.977.977 0 0 0 1.754 0L19.142 6.2c.332-.664-.143-1.449-.877-1.449Z"
    />
  </svg>
);
export default SvgIconArrowTriangleDown;
