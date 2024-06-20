import * as React from "react";
const SvgIconArrowTriangleUp = (props) => (
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
      d="M18.265 19.25H5.735c-.734 0-1.21-.785-.877-1.449l6.265-12.505a.978.978 0 0 1 1.754 0L19.142 17.8c.332.664-.143 1.449-.877 1.449Z"
    />
  </svg>
);
export default SvgIconArrowTriangleUp;
