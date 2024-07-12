import * as React from "react";
const SvgIconBugFill = (props) => (
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
      d="M17 7h.25c.966 0 1.75.784 1.75 1.75v.138l1.758-.598a.75.75 0 0 1 .484 1.42L19 10.473V13h2.25a.75.75 0 0 1 0 1.5H19v.5a7 7 0 0 1-.21 1.71 1 1 0 0 1 .082.024l2.37.806a.75.75 0 0 1-.484 1.42l-2.37-.806a1 1 0 0 1-.113-.05 7 7 0 0 1-5.525 3.856v-8.21a.75.75 0 0 0-1.5 0v8.21a7 7 0 0 1-5.525-3.855 1 1 0 0 1-.113.049l-2.37.806a.75.75 0 1 1-.484-1.42l2.37-.806a1 1 0 0 1 .083-.023A7 7 0 0 1 5 15v-.5H2.75a.75.75 0 0 1 0-1.5H5v-2.527L2.758 9.71a.75.75 0 1 1 .484-1.42L5 8.888V8.75C5 7.784 5.784 7 6.75 7H7a5 5 0 0 1 10 0m-5-3.5A3.5 3.5 0 0 0 8.5 7h7A3.5 3.5 0 0 0 12 3.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBugFill;
