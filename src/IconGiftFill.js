import * as React from "react";
const SvgIconGiftFill = (props) => (
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
      d="M6.25 4.417A2.417 2.417 0 0 1 8.667 2c1.376 0 2.593.68 3.333 1.724A4.08 4.08 0 0 1 15.333 2a2.417 2.417 0 0 1 2.417 2.417c0 .98-.345 1.88-.92 2.583h2.42c.966 0 1.75.784 1.75 1.75v.75a1.75 1.75 0 0 1-1.75 1.75h-6.5V7h.917a2.583 2.583 0 0 0 2.583-2.583.917.917 0 0 0-.917-.917 2.583 2.583 0 0 0-2.583 2.583V7h-1.5v-.917A2.583 2.583 0 0 0 8.667 3.5a.917.917 0 0 0-.917.917A2.583 2.583 0 0 0 10.333 7h.917v4.25h-6.5A1.75 1.75 0 0 1 3 9.5v-.75C3 7.784 3.784 7 4.75 7h2.42a4.07 4.07 0 0 1-.92-2.583m6.5 8.333H20v6.5A1.75 1.75 0 0 1 18.25 21h-5.5zm-1.5 0H4v6.5c0 .966.784 1.75 1.75 1.75h5.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconGiftFill;
