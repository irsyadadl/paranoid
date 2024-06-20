import * as React from "react";
const SvgIconTrophy = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.004 18v-3M18.25 4.75h2a1 1 0 0 1 1 1v1.5a3 3 0 0 1-3 3m-12.5-5.5h-2a1 1 0 0 0-1 1v1.5a3 3 0 0 0 3 3m6 5h.5a6 6 0 0 0 6-6v-5.5a1 1 0 0 0-1-1H6.75a1 1 0 0 0-1 1v5.5a6 6 0 0 0 6 6Zm-4 6h8.5a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1h-8.5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1Z"
    />
  </svg>
);
export default SvgIconTrophy;
