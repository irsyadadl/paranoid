import * as React from "react";
const SvgIconFilterDesc = (props) => (
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
      d="m14.348 20.25 1.212-2.5m0 0 1.94-4 1.933 4m-3.873 0h3.873m0 0 1.209 2.5M14.75 3.75h5.5l-5.5 6.5h5.5M7 3.75v16.5m0 0-3-3m3 3 3-3"
    />
  </svg>
);
export default SvgIconFilterDesc;
