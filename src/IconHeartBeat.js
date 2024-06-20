import * as React from "react";
const SvgIconHeartBeat = (props) => (
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
      d="M17.25 12h-2.1l-1.65 3-3-6-1.65 3h-2.1M12 5.572c6.333-6.44 17.19 5.52 0 15.178C-5.19 11.092 5.667-.868 12 5.572"
    />
  </svg>
);
export default SvgIconHeartBeat;
