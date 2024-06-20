import * as React from "react";
const SvgIconLock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.25 9.75v-2.5a4.25 4.25 0 0 0-8.5 0v2.5M12 14v3m-6.25 4.25h12.5a1 1 0 0 0 1-1v-9.5a1 1 0 0 0-1-1H5.75a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIconLock;
