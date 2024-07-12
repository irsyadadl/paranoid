import * as React from "react";
const SvgIconPersonRemove = (props) => (
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
      d="m20 16-2 2m0 0-2 2m2-2-2-2m2 2 2 2m-8.148-6.749c-3.72.065-6.428 2.567-7.18 5.915-.13.575.335 1.084.925 1.084h6.653m-.398-6.999L12 13.25q.78 0 1.5.138m-1.648-.137A8 8 0 0 0 10 13.5m5.75-7a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0"
    />
  </svg>
);
export default SvgIconPersonRemove;
