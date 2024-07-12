import * as React from "react";
const SvgIconRepeatFill = (props) => (
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
      d="M16.97 2.22a.75.75 0 0 1 1.06 0l2.647 2.646a1.25 1.25 0 0 1 0 1.768L18.03 9.28a.75.75 0 1 1-1.06-1.06l1.72-1.72H4.75a.25.25 0 0 0-.25.25v3.5a.75.75 0 0 1-1.5 0v-3.5C3 5.784 3.784 5 4.75 5h13.94l-1.72-1.72a.75.75 0 0 1 0-1.06M21 13.25a.75.75 0 0 0-1.5 0v4a.25.25 0 0 1-.25.25H5.31l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.647 2.646a1.25 1.25 0 0 0 0 1.768L5.97 21.78a.75.75 0 0 0 1.06-1.06L5.31 19h13.94A1.75 1.75 0 0 0 21 17.25z"
    />
  </svg>
);
export default SvgIconRepeatFill;
