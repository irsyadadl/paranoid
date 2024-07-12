import * as React from "react";
const SvgIconMute = (props) => (
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
      d="M17 5.94V3.75a.75.75 0 0 0-1.154-.632L9.842 6.961A.25.25 0 0 1 9.707 7H6.75A1.75 1.75 0 0 0 5 8.75v6.5c0 .727.443 1.35 1.074 1.615L3.22 19.72a.75.75 0 1 0 1.06 1.06l16.5-16.5a.75.75 0 0 0-1.06-1.06zM7.44 15.5h-.69a.25.25 0 0 1-.25-.25v-6.5a.25.25 0 0 1 .25-.25h2.957c.335 0 .662-.096.944-.276L15.5 5.12v2.32z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m15.5 18.88-4.39-2.81-1.086 1.086 5.822 3.726A.75.75 0 0 0 17 20.25V10.18l-1.5 1.5z"
    />
  </svg>
);
export default SvgIconMute;
