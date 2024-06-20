import * as React from "react";
const SvgIconFilmFill = (props) => (
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
      d="M3 4.75C3 3.784 3.784 3 4.75 3h14.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25zm1.75-.25a.25.25 0 0 0-.25.25v2.375H7V4.5zM17 4.5v2.625h2.5V4.75a.25.25 0 0 0-.25-.25zm2.5 4.125H17v2.625h2.5zm0 4.125H17v3.083h2.5zm0 4.583H17V19.5h2.25a.25.25 0 0 0 .25-.25zm-4-4.583v-1.5h-7v1.5zM7 19.5v-2.625H4.5v2.375c0 .138.112.25.25.25zm-2.5-4.125H7V12.75H4.5zm0-4.125H7V8.625H4.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconFilmFill;
