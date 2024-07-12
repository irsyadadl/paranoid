import * as React from "react";
const SvgIconAsterisk = (props) => (
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
      strokeWidth={1.5}
      d="M12.003 2.75v18.5M3.993 7.375l16.02 9.25m-16.02 0 16.022-9.25"
    />
  </svg>
);
export default SvgIconAsterisk;
