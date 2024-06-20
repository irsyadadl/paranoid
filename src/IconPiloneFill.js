import * as React from "react";
const SvgIconPiloneFill = (props) => (
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
      d="M8.822 3.27A1.75 1.75 0 0 1 10.504 2h2.992a1.75 1.75 0 0 1 1.682 1.27L16.816 9H7.184zM6.756 10.5l-.857 3H18.1l-.857-3zM18.53 15H5.47l-1.286 4.5H2.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-1.434z"
    />
  </svg>
);
export default SvgIconPiloneFill;
