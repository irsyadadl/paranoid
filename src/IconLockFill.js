import * as React from "react";
const SvgIconLockFill = (props) => (
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
      d="M12 2.25a5 5 0 0 0-5 5V9H5.75A1.75 1.75 0 0 0 4 10.75v9.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 20 20.25v-9.5A1.75 1.75 0 0 0 18.25 9H17V7.25a5 5 0 0 0-5-5M15.5 9V7.25a3.5 3.5 0 1 0-7 0V9zM12 13.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconLockFill;
