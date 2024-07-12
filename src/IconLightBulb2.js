import * as React from "react";
const SvgIconLightBulb2 = (props) => (
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
      d="M8.748 15.484v2.266a.5.5 0 0 0 .5.5h5.502a.5.5 0 0 0 .5-.5v-2.266m-6.502 0a7.3 7.3 0 0 1-1.165-.732 7.25 7.25 0 1 1 7.668.732m-6.503 0h6.502m-6.5 5.766h6.5"
    />
  </svg>
);
export default SvgIconLightBulb2;
