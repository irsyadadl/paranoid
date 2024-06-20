import * as React from "react";
const SvgIconInvite = (props) => (
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
      d="M4.75 10.985V3.75a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1v7.235M9.75 7.75h4.5m-1.941 5.9 7.633-2.476a1 1 0 0 1 1.308.952v7.124a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1v-7.124a1 1 0 0 1 1.309-.952l7.632 2.476a1 1 0 0 0 .617 0Z"
    />
  </svg>
);
export default SvgIconInvite;
