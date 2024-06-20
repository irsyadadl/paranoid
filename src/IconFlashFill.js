import * as React from "react";
const SvgIconFlashFill = (props) => (
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
      d="M14 2.356c0-1.227-1.584-1.72-2.28-.71L3.172 14.04A1.25 1.25 0 0 0 4.202 16h5.797v5.645c0 1.226 1.583 1.719 2.28.71L20.825 9.96A1.25 1.25 0 0 0 19.797 8h-5.798z"
    />
  </svg>
);
export default SvgIconFlashFill;
