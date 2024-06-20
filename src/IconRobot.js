import * as React from "react";
const SvgIconRobot = (props) => (
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
      d="M12 2.75v2m-9 4a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75m18 0a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75M9.75 14.5h4.5m-5-4.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m7 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m4.5 6.25V5.75a1 1 0 0 0-1-1H4.25a1 1 0 0 0-1 1v10.5a3 3 0 0 0 3 3h11.5a3 3 0 0 0 3-3"
    />
  </svg>
);
export default SvgIconRobot;
