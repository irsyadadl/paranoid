import * as React from "react";
const SvgIconToolbox = (props) => (
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
      d="M12.75 10.75v-7a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v7m-6.5-4h2.5m-10.5 4V6.252a1 1 0 0 1 .12-.474L6.263 3.19A.84.84 0 0 1 7 2.75v0c.308 0 .591.17.737.44L9.13 5.778a1 1 0 0 1 .12.474v4.498m-6.5 0h18.5v8.5a1 1 0 0 1-1 1H3.75a1 1 0 0 1-1-1z"
    />
  </svg>
);
export default SvgIconToolbox;
