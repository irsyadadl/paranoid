import * as React from "react";
const SvgIconToolboxFill = (props) => (
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
      d="M7 3.5a.09.09 0 0 0-.077.046L5.53 6.134a.25.25 0 0 0-.03.118V10h3V6.252a.25.25 0 0 0-.03-.118L7.077 3.546A.09.09 0 0 0 7 3.5M7 2c.584 0 1.12.32 1.397.835l1.394 2.587c.137.255.209.54.209.83V10h2V3.75c0-.966.784-1.75 1.75-1.75h4.5c.966 0 1.75.784 1.75 1.75V10h1.25a.75.75 0 0 1 .75.75v8.5A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25v-8.5a.75.75 0 0 1 .75-.75H4V6.252c0-.29.072-.575.21-.83l1.393-2.587A1.59 1.59 0 0 1 7 2m6.5 8h5V3.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25V6h1.75a.75.75 0 0 1 0 1.5H13.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconToolboxFill;
