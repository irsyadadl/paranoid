import * as React from "react";
const SvgIconVoice = (props) => (
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
      strokeWidth={1.5}
      d="M7.75 3.75v16.5m-4-10.5v4.5M12 7.75v8.5m4.25-10.5v12.5m4-8.5v4.5"
    />
  </svg>
);
export default SvgIconVoice;
