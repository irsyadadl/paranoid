import * as React from "react";
const SvgIconDownload = (props) => (
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
      d="M20.25 14.75v4.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1v-4.5M12 15V3.75M12 15l-3.5-3.5M12 15l3.5-3.5"
    />
  </svg>
);
export default SvgIconDownload;
