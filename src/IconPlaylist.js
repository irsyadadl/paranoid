import * as React from "react";
const SvgIconPlaylist = (props) => (
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
      d="M2.75 5.75h13.51M2.75 12h8.5m-8.5 6.25h6.5m12.004-1.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5 1.343-2.5 3-2.5 3 1.12 3 2.5m0 0v-12"
    />
  </svg>
);
export default SvgIconPlaylist;
