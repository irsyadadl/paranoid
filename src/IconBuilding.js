import * as React from "react";
const SvgIconBuilding = (props) => (
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
      d="M1.75 19.25h1m19.5 0h-1m0 0v-9.5a1 1 0 0 0-1-1h-3m4 10.5h-4m0-10.5v10.5m0-10.5v-3a1 1 0 0 0-1-1h-8.5a1 1 0 0 0-1 1v3m10.5 10.5h-3m-7.5 0V8.75m0 10.5h-4m4 0h3m-3-10.5h-3a1 1 0 0 0-1 1v9.5m7 0v-3.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v3.5m-4.5 0h4.5"
    />
  </svg>
);
export default SvgIconBuilding;
