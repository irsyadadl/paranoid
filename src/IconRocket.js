import * as React from "react";
const SvgIconRocket = (props) => (
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
      d="M4.528 17.25 1.75 20.107m5-.571L5.083 21.25m-2.333-9s3.77 1.77 5.5 3.5 3.5 5.5 3.5 5.5l3.18-2.953a1 1 0 0 0 .32-.733V15c4-2 6.5-5.25 6-12.25-7-.5-10.25 2-12.25 6H6.436a1 1 0 0 0-.733.32zm14.5-3.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
    />
  </svg>
);
export default SvgIconRocket;
