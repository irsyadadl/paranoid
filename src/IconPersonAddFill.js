import * as React from "react";
const SvgIconPersonAddFill = (props) => (
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
      d="M12 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m4.508 11.826A2.24 2.24 0 0 0 16 15.25V16h-.75a2.25 2.25 0 1 0 0 4.5H16v.5H5.6c-.999 0-1.908-.888-1.659-1.999C4.77 15.315 8.212 12.5 12 12.5c1.664 0 3.211.48 4.508 1.326"
    />
    <path
      fill="currentColor"
      d="M19 15.25a.75.75 0 0 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0V19h2.25a.75.75 0 0 0 0-1.5H19z"
    />
  </svg>
);
export default SvgIconPersonAddFill;
