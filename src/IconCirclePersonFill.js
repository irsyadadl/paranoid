import * as React from "react";
const SvgIconCirclePersonFill = (props) => (
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
      d="M12 2C6.477 2 2 6.477 2 12a9.97 9.97 0 0 0 3.2 7.333A9.97 9.97 0 0 0 12 22a9.97 9.97 0 0 0 6.8-2.667A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10M5.976 17.997C7.299 16.174 9.411 15 12 15s4.7 1.174 6.024 2.997A8.47 8.47 0 0 1 12 20.5a8.47 8.47 0 0 1-6.024-2.503M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCirclePersonFill;
