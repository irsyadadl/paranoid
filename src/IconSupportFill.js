import * as React from "react";
const SvgIconSupportFill = (props) => (
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
      d="M2 11.25a2.25 2.25 0 0 1 2.017-2.238C4.286 5.054 7.804 2 12 2s7.714 3.054 7.983 7.012A2.25 2.25 0 0 1 22 11.25v3.5a2.25 2.25 0 0 1-1.754 2.195A5.25 5.25 0 0 1 15 22h-2a1.75 1.75 0 0 1-1.75-1.75v-.607a.75.75 0 1 1 1.5 0v.607c0 .138.112.25.25.25h2a3.75 3.75 0 0 0 3.742-3.5h-.492a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75h.227C18.203 5.961 15.454 3.5 12 3.5S5.797 5.961 5.522 9h.228a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-.75.75h-1.5A2.25 2.25 0 0 1 2 14.75z"
    />
  </svg>
);
export default SvgIconSupportFill;
