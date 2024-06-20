import * as React from "react";
const SvgIconSupport = (props) => (
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
      d="M4.75 9.75V9.5c0-3.728 3.246-6.75 7.25-6.75s7.25 3.022 7.25 6.75v.25M12 19.643v.607a1 1 0 0 0 1 1h2a4.5 4.5 0 0 0 4.5-4.5m-15.25-7h1.5v6.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-3.5a1.5 1.5 0 0 1 1.5-1.5m14 0h1.5a1.5 1.5 0 0 1 1.5 1.5v3.5a1.5 1.5 0 0 1-1.5 1.5h-1.5z"
    />
  </svg>
);
export default SvgIconSupport;
