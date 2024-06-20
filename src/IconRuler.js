import * as React from "react";
const SvgIconRuler = (props) => (
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
      d="M8.875 8.875 11.5 11.5M8.875 8.875l-3.5 3.5m3.5-3.5 3.5-3.5M7 14l-1.625-1.625m0 0-2.918 2.918a1 1 0 0 0 0 1.414l4.836 4.836a1 1 0 0 0 1.414 0L21.543 8.707a1 1 0 0 0 0-1.414l-4.836-4.836a1 1 0 0 0-1.414 0l-2.918 2.918M14 7l-1.625-1.625"
    />
  </svg>
);
export default SvgIconRuler;
