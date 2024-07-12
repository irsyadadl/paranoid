import * as React from "react";
const SvgIconBrandProducthunt = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M10.5 12h2.833a1.5 1.5 0 0 0 0-3H10.5z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.5 7h4.833a3.5 3.5 0 0 1 0 7H10.5v3h-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandProducthunt;
