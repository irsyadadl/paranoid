import * as React from "react";
const SvgIconAccessible = (props) => (
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
      d="M12 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.248 16.25c-1.5-1.51-2.248-3.016-2.25-5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.75 16.25c1.54-1.492 2.25-3.016 2.248-5m-3.248-.559s1.97.265 3.25.265c1.279 0 3.25-.265 3.25-.265M12.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
    />
  </svg>
);
export default SvgIconAccessible;
