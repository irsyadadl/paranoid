import * as React from "react";
const SvgIconCursorClickFill = (props) => (
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
      d="M11 2a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 11 2m6.437 2.563a.75.75 0 0 1 0 1.06l-1.311 1.31a.75.75 0 1 1-1.06-1.06l1.31-1.31a.75.75 0 0 1 1.06 0ZM6.935 16.126a.75.75 0 1 0-1.061-1.06l-1.31 1.31a.75.75 0 0 0 1.06 1.06l1.31-1.31ZM5.25 11a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1 0-1.5H4.5a.75.75 0 0 1 .75.75m.624-4.065a.75.75 0 0 0 1.06-1.061l-1.31-1.31a.75.75 0 1 0-1.06 1.06zm5.177 2.577c-.804-.321-1.61.463-1.309 1.276l3.866 10.461a1 1 0 0 0 1.813.14l2.131-3.838 3.853-2.14a1 1 0 0 0-.114-1.803z"
    />
  </svg>
);
export default SvgIconCursorClickFill;
