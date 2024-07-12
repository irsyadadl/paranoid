import * as React from "react";
const SvgIconCommandFill = (props) => (
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
      d="M9.281 8.39v.891h-.89a.89.89 0 1 1 .89-.89Zm1.5 4.829V10.78h2.438v2.438H10.78Zm-2.391 1.5h.891v.89a.89.89 0 1 1-.89-.89Zm6.329.891v-.891h.89a.89.89 0 1 1-.89.89Zm.891-6.329h-.891v-.89a.89.89 0 1 1 .89.89Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.75 3A1.75 1.75 0 0 0 3 4.75v14.5c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 19.25V4.75A1.75 1.75 0 0 0 19.25 3zm3.64 3a2.39 2.39 0 0 0 0 4.781h.891v2.438h-.89a2.39 2.39 0 1 0 2.39 2.39v-.89h2.438v.89a2.39 2.39 0 1 0 2.39-2.39h-.89V10.78h.89a2.39 2.39 0 1 0-2.39-2.39v.89H10.78v-.89A2.39 2.39 0 0 0 8.391 6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCommandFill;
