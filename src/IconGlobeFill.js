import * as React from "react";
const SvgIconGlobeFill = (props) => (
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
      fillRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8.27 10.467a.5.5 0 0 1-.746.175L4.691 8.518a.48.48 0 0 1-.14-.615 8.5 8.5 0 0 1 9.023-4.258.48.48 0 0 1 .367.592l-.866 3.472a.5.5 0 0 1-.364.364l-3.482.876a.5.5 0 0 0-.325.26l-.633 1.258Zm6.87 6.257a.5.5 0 0 1-.447.276H12.27a.5.5 0 0 1-.416-.223l-1.624-2.435a.5.5 0 0 1 .063-.632l.659-.656a.5.5 0 0 1 .384-.145l1.583.101a.5.5 0 0 1 .247.084l2.471 1.66a.5.5 0 0 1 .169.64z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconGlobeFill;
