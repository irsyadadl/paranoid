import * as React from "react";
const SvgIconPlaylistFill = (props) => (
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
      d="M22.004 4.75a.75.75 0 0 0-1.5 0v9.4a4.2 4.2 0 0 0-2.25-.65c-1.937 0-3.75 1.333-3.75 3.25S16.317 20 18.254 20s3.75-1.333 3.75-3.25zM2.75 5a.75.75 0 0 0 0 1.5h13.51a.75.75 0 0 0 0-1.5zm0 6.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 6.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
    />
  </svg>
);
export default SvgIconPlaylistFill;
