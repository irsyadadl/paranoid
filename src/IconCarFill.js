import * as React from "react";
const SvgIconCarFill = (props) => (
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
      d="M22.5 11.5v6.75A1.75 1.75 0 0 1 20.75 20h-1.5a1.75 1.75 0 0 1-1.75-1.75v-.321h-11v.321A1.75 1.75 0 0 1 4.75 20h-1.5a1.75 1.75 0 0 1-1.75-1.75V11.5H.75a.75.75 0 0 1 0-1.5h1.084L5.07 4.822A1.75 1.75 0 0 1 6.554 4h10.892c.603 0 1.164.31 1.484.822L22.166 10h1.084a.75.75 0 0 1 0 1.5zM5 13.036a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m10.5 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCarFill;
