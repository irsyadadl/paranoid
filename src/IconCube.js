import * as React from "react";
const SvgIconCube = (props) => (
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
      d="M12 12v8.5m0-8.5L4.5 7.781m7.5 4.22 7.263-4.086m.987.03v8.11a1 1 0 0 1-.51.872l-7.25 4.079a1 1 0 0 1-.98 0l-7.25-4.079a1 1 0 0 1-.51-.871V7.944a1 1 0 0 1 .51-.871l7.25-4.078a1 1 0 0 1 .98 0l7.25 4.078a1 1 0 0 1 .51.871Z"
    />
  </svg>
);
export default SvgIconCube;
