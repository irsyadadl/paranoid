import * as React from "react";
const SvgIconCursorClick = (props) => (
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
      d="M11 2.75V4.5m5.907.593-1.31 1.31m-9.193 9.193-1.31 1.31M4.5 11H2.75m3.654-4.596-1.31-1.31m9.217 15.895-3.866-10.461a.25.25 0 0 1 .327-.319l10.24 4.096a.25.25 0 0 1 .028.45l-3.978 2.21a.25.25 0 0 0-.097.097l-2.2 3.962a.25.25 0 0 1-.454-.035"
    />
  </svg>
);
export default SvgIconCursorClick;
