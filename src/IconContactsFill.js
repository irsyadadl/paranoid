import * as React from "react";
const SvgIconContactsFill = (props) => (
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
      d="M4 3.75C4 2.784 4.784 2 5.75 2h13.5a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H5.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h13.5a.75.75 0 0 1 0 1.5H5.75A1.75 1.75 0 0 1 4 20.25zm6.25 5.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m4 5.25h-4.5c-.238 0-1.355-.569-.319-1.95.452-.603 1.261-1.05 2.569-1.05s2.117.447 2.569 1.05c1.035 1.381-.081 1.95-.319 1.95"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconContactsFill;
