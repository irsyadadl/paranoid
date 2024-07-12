import * as React from "react";
const SvgIconTruckFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.75 4A1.75 1.75 0 0 0 8 5.75V6H5.524a1.75 1.75 0 0 0-1.439.754L2.311 9.316a1.75 1.75 0 0 0-.311.996v4.938c0 .966.784 1.75 1.75 1.75h.26a3.25 3.25 0 0 0 6.48 0h3.02a3.25 3.25 0 0 0 6.48 0h.26A1.75 1.75 0 0 0 22 15.25v-9.5A1.75 1.75 0 0 0 20.25 4zM8 7.5H5.524a.25.25 0 0 0-.206.108L3.544 10.17a.25.25 0 0 0-.044.142v4.938c0 .138.112.25.25.25h.5A3.25 3.25 0 0 1 8 13.587zm10.106 8.143c.072.213.18.41.314.584a1.75 1.75 0 1 1-.315-.584ZM7.25 15a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconTruckFill;
