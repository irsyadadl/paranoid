import * as React from "react";
const SvgIconCursor = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.36 4 6.132 17.032a.5.5 0 0 0 .932.02l3.024-7.332a.5.5 0 0 1 .272-.271l7.332-3.024a.5.5 0 0 0-.02-.933L4 3.36a.5.5 0 0 0-.64.64Z"
    />
  </svg>
);
export default SvgIconCursor;
