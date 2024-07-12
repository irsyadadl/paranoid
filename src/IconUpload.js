import * as React from "react";
const SvgIconUpload = (props) => (
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
      d="M12 3.75V15m0-11.25 4.5 4.5M12 3.75l-4.5 4.5m12.75 4.5v6.5a1 1 0 0 1-1 1H4.75a1 1 0 0 1-1-1v-6.5"
    />
  </svg>
);
export default SvgIconUpload;
