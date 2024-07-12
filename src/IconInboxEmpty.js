import * as React from "react";
const SvgIconInboxEmpty = (props) => (
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
      strokeWidth={1.5}
      d="M2 12.75h5.92a1 1 0 0 1 .793.39l.937 1.22a1 1 0 0 0 .793.39h3.114a1 1 0 0 0 .793-.39l.937-1.22a1 1 0 0 1 .793-.39H22m.14-.215-3.711-7.241a1 1 0 0 0-.89-.544H6.46a1 1 0 0 0-.89.544l-3.71 7.241a1 1 0 0 0-.111.456v5.259a1 1 0 0 0 1 1h18.5a1 1 0 0 0 1-1v-5.259a1 1 0 0 0-.11-.456Z"
    />
  </svg>
);
export default SvgIconInboxEmpty;
