import * as React from "react";
const SvgIconBoldFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 6.188C5 4.873 6.05 3.75 7.417 3.75h5.5c2.885 0 5.166 2.382 5.166 5.25a5.3 5.3 0 0 1-1.148 3.3A5.28 5.28 0 0 1 19 16.5c0 2.867-2.282 5.25-5.167 5.25H7.417C6.05 21.75 5 20.627 5 19.312zm7.917 5.062c1.165 0 2.166-.975 2.166-2.25s-1.001-2.25-2.166-2.25H8v4.5zM8 14.25h5.833c1.165 0 2.167.975 2.167 2.25s-1.002 2.25-2.167 2.25H8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBoldFill;
