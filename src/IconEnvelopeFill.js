import * as React from "react";
const SvgIconEnvelopeFill = (props) => (
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
      d="M3.75 4A1.75 1.75 0 0 0 2 5.75v1.04l9.888 4.975a.25.25 0 0 0 .224 0L22 6.789V5.75A1.75 1.75 0 0 0 20.25 4z"
    />
    <path
      fill="currentColor"
      d="m22 8.469-9.213 4.636a1.75 1.75 0 0 1-1.574 0L2 8.468v9.781c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0 0 22 18.25z"
    />
  </svg>
);
export default SvgIconEnvelopeFill;
