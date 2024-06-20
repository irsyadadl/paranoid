import * as React from "react";
const SvgIconMap = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.75 5v12.5m6.5-11V19m-12.5-.888V7.221a1 1 0 0 1 .684-.95l5.012-1.67a1 1 0 0 1 .61-.007l5.888 1.812a1 1 0 0 0 .61-.008l4.38-1.46a1 1 0 0 1 1.316.95v10.891a1 1 0 0 1-.684.949l-5.012 1.67a1 1 0 0 1-.61.008l-5.888-1.812a1 1 0 0 0-.61.007l-4.38 1.46a1 1 0 0 1-1.316-.949Z"
    />
  </svg>
);
export default SvgIconMap;
