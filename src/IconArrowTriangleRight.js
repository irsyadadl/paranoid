import * as React from "react";
const SvgIconArrowTriangleRight = (props) => (
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
      d="M4.75 18.265V5.735c0-.734.785-1.21 1.449-.877l12.505 6.265a.977.977 0 0 1 0 1.754L6.2 19.142c-.664.332-1.449-.143-1.449-.877Z"
    />
  </svg>
);
export default SvgIconArrowTriangleRight;
