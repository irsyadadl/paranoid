import * as React from "react";
const SvgIconDateTime = (props) => (
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
      d="m2.462 9.956 1.302 7.386a1 1 0 0 0 1.159.812l5.193-.916M2.462 9.956 1.94 7.002a1 1 0 0 1 .811-1.159l11.325-1.997a1 1 0 0 1 1.159.812l.52 2.954L2.463 9.956ZM16 11.75V14l2 2m4.25-2a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0"
    />
  </svg>
);
export default SvgIconDateTime;
