import * as React from "react";
const SvgIconFilesFill = (props) => (
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
      d="M8.75 2A1.75 1.75 0 0 0 7 3.75V5H5.75A1.75 1.75 0 0 0 4 6.75v13.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 18 20.25V19h1.25A1.75 1.75 0 0 0 21 17.25V8.5h-4.75a1.75 1.75 0 0 1-1.75-1.75V2zm7.75 17H8.75A1.75 1.75 0 0 1 7 17.25V6.5H5.75a.25.25 0 0 0-.25.25v13.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M16 2.44 20.56 7h-4.31a.25.25 0 0 1-.25-.25z"
    />
  </svg>
);
export default SvgIconFilesFill;
