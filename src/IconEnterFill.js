import * as React from "react";
const SvgIconEnterFill = (props) => (
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
      d="M20.25 4a.75.75 0 0 0-.75.75v9.5a.25.25 0 0 1-.25.25H5.56l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L5.56 16h13.69A1.75 1.75 0 0 0 21 14.25v-9.5a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconEnterFill;
