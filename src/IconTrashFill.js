import * as React from "react";
const SvgIconTrashFill = (props) => (
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
      d="M7.584 5a4.751 4.751 0 0 1 8.834 0h4.832a.75.75 0 0 1 0 1.5h-1.297l-.894 13.863A1.75 1.75 0 0 1 17.312 22H6.688a1.75 1.75 0 0 1-1.747-1.637L4.047 6.5H2.75a.75.75 0 0 1 0-1.5zm1.678 0a3.25 3.25 0 0 1 5.479 0H9.26Zm1.238 5.75a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0zm3.75-.75a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconTrashFill;
