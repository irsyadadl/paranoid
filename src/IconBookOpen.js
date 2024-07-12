import * as React from "react";
const SvgIconBookOpen = (props) => (
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
      d="M21.75 4.5H15A3.75 3.75 0 0 0 12 6a3.75 3.75 0 0 0-3-1.5H2.25a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 .75.75H9a2.25 2.25 0 0 1 2.25 2.25.75.75 0 1 0 1.5 0A2.25 2.25 0 0 1 15 19.5h6.75a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75M9 18H3V6h6a2.25 2.25 0 0 1 2.25 2.25v10.5A3.73 3.73 0 0 0 9 18m12 0h-6a3.73 3.73 0 0 0-2.25.75V8.25A2.25 2.25 0 0 1 15 6h6z"
    />
  </svg>
);
export default SvgIconBookOpen;
