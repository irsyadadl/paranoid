import * as React from "react";
const SvgIconMicOffFill = (props) => (
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
      d="M17 11.5c0 .685-.137 1.337-.387 1.931l-8.94-8.94A5 5 0 0 1 17 7v4.501ZM3.53 2.47a.75.75 0 0 0-1.06 1.06L7 8.06v3.44a5 5 0 0 0 7.668 4.23l1.26 1.26A6.752 6.752 0 0 1 5.81 14.2a.75.75 0 1 0-1.373.6 8.26 8.26 0 0 0 6.813 4.916v1.534a.75.75 0 1 0 1.5 0v-1.534A8.2 8.2 0 0 0 17 18.062l3.469 3.468a.75.75 0 1 0 1.06-1.06z"
    />
  </svg>
);
export default SvgIconMicOffFill;
