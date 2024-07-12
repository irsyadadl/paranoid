import * as React from "react";
const SvgIconBookmarkFill = (props) => (
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
      d="M5.75 2A1.75 1.75 0 0 0 4 3.75v16.502c0 1.4 1.565 2.234 2.727 1.451l5.133-3.455a.25.25 0 0 1 .28 0l5.133 3.455c1.162.783 2.727-.05 2.727-1.451V3.75A1.75 1.75 0 0 0 18.25 2z"
    />
  </svg>
);
export default SvgIconBookmarkFill;
