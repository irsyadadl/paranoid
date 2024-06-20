import * as React from "react";
const SvgIconTriangleInfo = (props) => (
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
      d="M12 8.75v4M9.45 4.376 3.08 14.672c-1.236 1.999.202 4.578 2.552 4.578h12.735c2.35 0 3.787-2.58 2.551-4.578L14.552 4.376c-1.173-1.896-3.93-1.896-5.103 0Z"
    />
    <circle cx={12} cy={15.5} r={1} fill="currentColor" />
  </svg>
);
export default SvgIconTriangleInfo;
