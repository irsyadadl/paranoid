import * as React from "react";
const SvgIconUnlocked = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 14v3M7.75 9.75V7a4.25 4.25 0 0 1 8.435-.746M5.75 21.25h12.5a1 1 0 0 0 1-1v-9.5a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconUnlocked;
