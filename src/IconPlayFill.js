import * as React from "react";
const SvgIconPlayFill = (props) => (
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
      d="M7.657 2.279C6.491 1.572 5 2.41 5 3.775v16.45c0 1.363 1.49 2.203 2.657 1.496l13.57-8.225a1.75 1.75 0 0 0 0-2.993L7.658 2.28Z"
    />
  </svg>
);
export default SvgIconPlayFill;
