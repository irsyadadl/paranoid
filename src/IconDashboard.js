import * as React from "react";
const SvgIconDashboard = (props) => (
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
      d="M12 15.75 15 10m-3 5.75H3.542m8.458 0h8.459m-16.917 0a9.2 9.2 0 0 0 1.917 2.79 9.25 9.25 0 0 0 13.082 0 9.2 9.2 0 0 0 1.918-2.79m-16.917 0A9.25 9.25 0 0 1 5.459 5.46a9.25 9.25 0 0 1 13.082 0 9.25 9.25 0 0 1 1.918 10.29"
    />
  </svg>
);
export default SvgIconDashboard;
