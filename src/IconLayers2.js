import * as React from "react";
const SvgIconLayers2 = (props) => (
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
      d="m7.797 12-4.49 2.234c-.743.37-.743 1.437 0 1.807l8.25 4.105c.28.139.607.139.886 0l8.25-4.105c.743-.37.743-1.438 0-1.807L16.203 12m-8.406 0-4.49-2.234c-.743-.37-.743-1.437 0-1.807l8.25-4.105a1 1 0 0 1 .886 0l8.25 4.105c.743.37.743 1.437 0 1.807L16.203 12m-8.406 0 3.76 1.871c.28.139.607.139.886 0L16.203 12"
    />
  </svg>
);
export default SvgIconLayers2;
