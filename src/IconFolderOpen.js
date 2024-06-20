import * as React from "react";
const SvgIconFolderOpen = (props) => (
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
      d="m5.5 19.25 2.289-7.782a1 1 0 0 1 .96-.718H20.25M5.5 19.25h13.252a1 1 0 0 0 .96-.718l2.1-7.14a.5.5 0 0 0-.48-.642H20.25M5.5 19.25H3.75m16.5-8.5v-3a1 1 0 0 0-1-1H12l-1.703-2.555a1 1 0 0 0-.832-.445H3.75a1 1 0 0 0-1 1v13.5m0 0a1 1 0 0 0 1 1m-1-1V11m1 8.25h1.002a1 1 0 0 0 .96-.718L7.925 11"
    />
  </svg>
);
export default SvgIconFolderOpen;
