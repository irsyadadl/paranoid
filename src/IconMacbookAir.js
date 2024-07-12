import * as React from "react";
const SvgIconMacbookAir = (props) => (
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
      d="M21.25 13.75v-8a1 1 0 0 0-1-1H3.75a1 1 0 0 0-1 1v8m-1 3v1.5a1 1 0 0 0 1 1h18.5a1 1 0 0 0 1-1v-1.5h-6.934a1 1 0 0 0-.456.11l-.545.28a1 1 0 0 1-.457.11h-3.637a1 1 0 0 1-.422-.093l-.673-.314a1 1 0 0 0-.422-.093z"
    />
  </svg>
);
export default SvgIconMacbookAir;
