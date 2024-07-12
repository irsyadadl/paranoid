import * as React from "react";
const SvgIconCursor3 = (props) => (
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
      d="M19.021 8.978 4.026 3.383a.5.5 0 0 0-.643.643l5.595 14.995a.5.5 0 0 0 .822.179l2.45-2.45 4.396 4.396a.5.5 0 0 0 .707 0l3.793-3.793a.5.5 0 0 0 0-.707L16.75 12.25 19.2 9.8a.5.5 0 0 0-.179-.822"
    />
  </svg>
);
export default SvgIconCursor3;
