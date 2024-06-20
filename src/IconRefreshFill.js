import * as React from "react";
const SvgIconRefreshFill = (props) => (
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
      d="M6.345 7A7.65 7.65 0 0 1 12 4.5a7.5 7.5 0 0 1 7.442 8.438.75.75 0 0 0 1.488.186A9 9 0 0 0 12 3a9.15 9.15 0 0 0-6.5 2.711V3.75a.75.75 0 0 0-1.5 0v3.5c0 .69.56 1.25 1.25 1.25h3.5a.75.75 0 0 0 0-1.5zm-1.787 4.062a.75.75 0 0 0-1.488-.186A9 9 0 0 0 12 21a9.15 9.15 0 0 0 6.512-2.723v1.973a.75.75 0 0 0 1.5 0v-3.5c0-.69-.56-1.25-1.25-1.25h-3.5a.75.75 0 0 0 0 1.5h2.393A7.65 7.65 0 0 1 12 19.5a7.5 7.5 0 0 1-7.442-8.438"
    />
  </svg>
);
export default SvgIconRefreshFill;
