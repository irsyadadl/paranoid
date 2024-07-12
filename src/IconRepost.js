import * as React from "react";
const SvgIconRepost = (props) => (
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
      d="m10.75 1.5 3.5 3.25L10.75 8m2.5 8-3.5 3.25 3.5 3.25m-2.5-3.25H14a7.25 7.25 0 0 0 4.755-12.723M13.25 4.75H10a7.25 7.25 0 0 0-4.754 12.724"
    />
  </svg>
);
export default SvgIconRepost;
