import * as React from "react";
const SvgIconGlassesFill = (props) => (
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
      d="M6 7a5 5 0 0 0-4 2H.75a.75.75 0 0 0 0 1.5h.48a5 5 0 1 0 9.278-.667A3.5 3.5 0 0 1 12 9.5c.535 0 1.04.12 1.493.333a5 5 0 1 0 9.278.667h.479a.75.75 0 0 0 0-1.5H22a5 5 0 0 0-4-2c-1.441 0-2.74.61-3.652 1.585A5 5 0 0 0 12 8a5 5 0 0 0-2.348.585A4.99 4.99 0 0 0 6 7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconGlassesFill;
