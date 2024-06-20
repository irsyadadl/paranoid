import * as React from "react";
const SvgIconEyeFill = (props) => (
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
      d="M12 4c4.01 0 7.91 2.477 10.43 7.2a1.71 1.71 0 0 1 0 1.6C19.91 17.524 16.01 20 12 20s-7.91-2.477-10.43-7.2a1.71 1.71 0 0 1 0-1.6C4.09 6.476 7.99 4 12 4m-3.625 8a3.625 3.625 0 1 1 7.25 0 3.625 3.625 0 0 1-7.25 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconEyeFill;
