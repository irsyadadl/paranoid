import * as React from "react";
const SvgIconMicOff = (props) => (
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
      d="M16.25 11.5V7a4.25 4.25 0 0 0-7.61-2.603M3 3l4.75 4.75m0 0v3.75a4.25 4.25 0 0 0 6.995 3.245M7.75 7.75l6.995 6.995m0 0L21 21m-9-2a7.5 7.5 0 0 0 6.876-4.5M12 19a7.5 7.5 0 0 1-6.876-4.5M12 19v2.25"
    />
  </svg>
);
export default SvgIconMicOff;
