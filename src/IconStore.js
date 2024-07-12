import * as React from "react";
const SvgIconStore = (props) => (
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
      d="M15.25 20.25v-5.5a1 1 0 0 0-1-1h-4.5a1 1 0 0 0-1 1v5.5m-.875-16.5V7.2m0 0c0 1.14-.923 2.07-2.063 2.07A2.07 2.07 0 0 1 3.75 7.2m4.125 0c0 1.14.923 2.07 2.063 2.07C11.076 9.27 12 8.34 12 7.2m0-3.45V7.2m0 0c0 1.14.923 2.07 2.063 2.07 1.139 0 2.062-.93 2.062-2.07m0-3.45V7.2m0 0c0 1.14.923 2.07 2.063 2.07 1.139 0 2.062-.93 2.062-2.07M3.75 4.75v14.5a1 1 0 0 0 1 1h14.5a1 1 0 0 0 1-1V4.75a1 1 0 0 0-1-1H4.75a1 1 0 0 0-1 1"
    />
  </svg>
);
export default SvgIconStore;
