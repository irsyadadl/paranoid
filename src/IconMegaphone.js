import * as React from "react";
const SvgIconMegaphone = (props) => (
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
      d="M18.248 14a3 3 0 1 0 0-6m-5.67 10.25a3.001 3.001 0 0 1-5.83-1v-1.5m.002-9.5v9.5M18.248 4.105v13.79a1 1 0 0 1-1.295.955l-13.5-4.168a1 1 0 0 1-.705-.956V8.273a1 1 0 0 1 .705-.955l13.5-4.168a1 1 0 0 1 1.295.955"
    />
  </svg>
);
export default SvgIconMegaphone;
