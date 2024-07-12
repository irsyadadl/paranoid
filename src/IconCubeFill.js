import * as React from "react";
const SvgIconCubeFill = (props) => (
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
      d="M11.13 2.32a1.77 1.77 0 0 1 1.74 0l7.25 4.08q.075.042.146.092L12 11.14 3.735 6.49q.07-.048.146-.091zM2.983 7.789a2 2 0 0 0-.006.155v8.112c0 .64.345 1.232.904 1.546l7.25 4.078q.059.033.12.061V12.44L2.983 7.79ZM12.75 21.74q.06-.027.12-.06l7.25-4.078c.558-.314.903-.905.903-1.546V7.944q0-.078-.006-.155l-8.266 4.65v9.302Z"
    />
  </svg>
);
export default SvgIconCubeFill;
