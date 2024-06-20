import * as React from "react";
const SvgIconVideoPlaylist = (props) => (
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
      d="M4.75 3.75h14.5m-7.75 9.5h.75m-.75 0V13m0 .25v.25m-.75-2.75v5l3.25-2.5zm-7 9.5h16.5a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconVideoPlaylist;
