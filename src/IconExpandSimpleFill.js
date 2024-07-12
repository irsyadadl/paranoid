import * as React from "react";
const SvgIconExpandSimpleFill = (props) => (
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
      d="M12 5.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.5h-4.75a.75.75 0 0 1-.75-.75M5.75 12a.75.75 0 0 1 .75.75v4.75h4.75a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75v-5.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconExpandSimpleFill;
