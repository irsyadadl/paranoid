import * as React from "react";
const SvgIconFlashOff = (props) => (
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
      fillRule="evenodd"
      d="M7.835 7.28 3.249 3.19a.75.75 0 0 0-.998 1.12l18.5 16.5a.75.75 0 1 0 .998-1.12l-4.726-4.215 3.803-5.515A1.25 1.25 0 0 0 19.797 8h-5.798V2.356c0-1.227-1.583-1.72-2.279-.71zm1.128 1.006 6.931 6.183L19.321 9.5h-5.572c-.69 0-1.25-.56-1.25-1.25V3.16z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m6.119 9.768 1.128 1.006-2.57 3.726h5.572c.69 0 1.25.56 1.25 1.25v5.092l2.68-3.885 1.128 1.006-3.029 4.391c-.696 1.01-2.279.517-2.279-.71V16H4.201a1.25 1.25 0 0 1-1.029-1.96L6.12 9.768Z"
    />
  </svg>
);
export default SvgIconFlashOff;
