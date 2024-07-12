import * as React from "react";
const SvgIconCircleDotsVertical = (props) => (
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
      stroke="currentColor"
      strokeWidth={0.5}
      d="M11.25 8a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm0 4a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm0 4a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M12 21.25a9.25 9.25 0 1 1 0-18.5 9.25 9.25 0 0 1 0 18.5Z"
    />
  </svg>
);
export default SvgIconCircleDotsVertical;
