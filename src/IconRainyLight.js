import * as React from "react";
const SvgIconRainyLight = (props) => (
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
      strokeWidth={1.5}
      d="m11.25 15.75-1 2m3.25.75-1 2m-3.078-5.25h6.703c2.278 0 4.125-1.872 4.125-4.182s-1.847-4.182-4.125-4.182a4 4 0 0 0-.579.041c-.535.076-1.099-.15-1.395-.602-1.016-1.552-2.755-2.575-4.73-2.575C6.29 3.75 3.75 6.324 3.75 9.5s2.54 5.75 5.672 5.75Z"
    />
  </svg>
);
export default SvgIconRainyLight;
