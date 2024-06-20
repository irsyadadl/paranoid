import * as React from "react";
const SvgIconVolumeFullFill = (props) => (
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
      d="M13 3.75a.75.75 0 0 0-1.154-.632L5.842 6.961A.25.25 0 0 1 5.707 7H2.75A1.75 1.75 0 0 0 1 8.75v6.5c0 .966.784 1.75 1.75 1.75h2.957a.25.25 0 0 1 .135.04l6.004 3.842A.75.75 0 0 0 13 20.25zm5.718.472a.75.75 0 0 1 1.06 0A10.97 10.97 0 0 1 23 12c0 3.037-1.232 5.788-3.222 7.778a.75.75 0 1 1-1.06-1.06A9.47 9.47 0 0 0 21.5 12a9.47 9.47 0 0 0-2.782-6.718.75.75 0 0 1 0-1.06M16.42 7.581a.75.75 0 0 0-1.061 1.06 4.73 4.73 0 0 1 1.391 3.36 4.73 4.73 0 0 1-1.391 3.358.75.75 0 1 0 1.06 1.06A6.23 6.23 0 0 0 18.25 12c0-1.725-.7-3.289-1.83-4.419"
    />
  </svg>
);
export default SvgIconVolumeFullFill;
