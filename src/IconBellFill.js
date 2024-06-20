import * as React from "react";
const SvgIconBellFill = (props) => (
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
      d="M12 2a7.795 7.795 0 0 0-7.696 6.554l-1.357 8.417A1.75 1.75 0 0 0 4.674 19h2.834c.85 1.75 2.512 3 4.492 3s3.643-1.25 4.492-3h2.834a1.75 1.75 0 0 0 1.727-2.029l-1.357-8.417A7.795 7.795 0 0 0 12 2m2.754 17H9.247c.677.937 1.68 1.5 2.753 1.5s2.076-.563 2.754-1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBellFill;
