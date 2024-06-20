import * as React from "react";
const SvgIconFilterFill = (props) => (
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
      d="M4.75 3A1.75 1.75 0 0 0 3 4.75v2.836c0 .464.184.909.513 1.237l5.414 5.414a.25.25 0 0 1 .073.177v6.836a.75.75 0 0 0 .95.723l4.5-1.25A.75.75 0 0 0 15 20v-5.586a.25.25 0 0 1 .073-.177l5.414-5.414A1.75 1.75 0 0 0 21 7.586V4.75A1.75 1.75 0 0 0 19.25 3z"
    />
  </svg>
);
export default SvgIconFilterFill;
