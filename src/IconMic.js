import * as React from "react";
const SvgIconMic = (props) => (
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
      d="M12 19a7.5 7.5 0 0 0 6.876-4.5M12 19a7.5 7.5 0 0 1-6.876-4.5M12 19v2.25m0-5.5a4.25 4.25 0 0 1-4.25-4.25V7a4.25 4.25 0 0 1 8.5 0v4.5A4.25 4.25 0 0 1 12 15.75"
    />
  </svg>
);
export default SvgIconMic;
