import * as React from "react";
const SvgIconRepeat2Fill = (props) => (
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
      d="M17.78 21.78a.75.75 0 1 1-1.06-1.06L18.44 19H3.75a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v3.75h13.94l-1.72-1.72a.75.75 0 1 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06zM7.28 8.22a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06L5.56 5h14.69a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V6.5H5.56z"
    />
  </svg>
);
export default SvgIconRepeat2Fill;
