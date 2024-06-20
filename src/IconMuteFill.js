import * as React from "react";
const SvgIconMuteFill = (props) => (
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
      d="M17 5.94V3.75a.75.75 0 0 0-1.154-.632L9.842 6.961A.25.25 0 0 1 9.707 7H6.75A1.75 1.75 0 0 0 5 8.75v6.5c0 .727.443 1.35 1.074 1.615L3.22 19.72a.75.75 0 1 0 1.06 1.06l16.5-16.5a.75.75 0 0 0-1.06-1.06zm-1.154 14.942-5.822-3.726L17 10.18v10.07a.75.75 0 0 1-1.154.632"
    />
  </svg>
);
export default SvgIconMuteFill;
