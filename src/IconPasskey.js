import * as React from "react";
const SvgIconPasskey = (props) => (
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
      d="M13 12.815a8 8 0 0 0-1-.065c-3.824 0-6.607 2.744-7.345 6.42-.116.575.35 1.08.937 1.08H14M15.75 6.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0m0 7.5a2.25 2.25 0 1 1 3.5 1.871V17l-.5.936.5 1.032V20L18 21l-1.25-1v-4.129a2.25 2.25 0 0 1-1-1.871"
    />
  </svg>
);
export default SvgIconPasskey;
