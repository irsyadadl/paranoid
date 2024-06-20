import * as React from "react";
const SvgIconBagBlankFill = (props) => (
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
      d="M8.75 3.5a.25.25 0 0 0-.25.25V6h7V3.75a.25.25 0 0 0-.25-.25zM17 6V3.75A1.75 1.75 0 0 0 15.25 2h-6.5A1.75 1.75 0 0 0 7 3.75V6H3.75A1.75 1.75 0 0 0 2 7.75v11.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 19.25V7.75A1.75 1.75 0 0 0 20.25 6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBagBlankFill;
