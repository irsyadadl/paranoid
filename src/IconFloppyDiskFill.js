import * as React from "react";
const SvgIconFloppyDiskFill = (props) => (
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
      d="M7 3H4.75A1.75 1.75 0 0 0 3 4.75v14.5c0 .966.784 1.75 1.75 1.75H7v-8.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75V21h2.25A1.75 1.75 0 0 0 21 19.25V7.164c0-.464-.184-.909-.513-1.237l-2.414-2.414A1.75 1.75 0 0 0 17 3.008V8.25a.75.75 0 0 1-.75.75h-8.5A.75.75 0 0 1 7 8.25z"
    />
    <path fill="currentColor" d="M15.5 3h-7v4.5h7zm0 18v-7.5h-7V21z" />
  </svg>
);
export default SvgIconFloppyDiskFill;
