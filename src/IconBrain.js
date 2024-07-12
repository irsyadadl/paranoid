import * as React from "react";
const SvgIconBrain = (props) => (
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
      strokeWidth={1.5}
      d="M12 20.471a4.627 4.627 0 0 0 7.017-2.572A3.598 3.598 0 0 0 20.17 12a3.598 3.598 0 0 0-2.128-6.146A4.113 4.113 0 0 0 12 3.3m0 17.171A4.627 4.627 0 0 1 4.983 17.9 3.598 3.598 0 0 1 3.83 12a3.598 3.598 0 0 1 2.128-6.146A4.113 4.113 0 0 1 12 3.3m0 17.171V3.3M8.75 13.75A3.25 3.25 0 0 1 12 17m3.25-6.75A3.25 3.25 0 0 1 12 7"
    />
  </svg>
);
export default SvgIconBrain;
