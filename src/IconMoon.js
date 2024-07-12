import * as React from "react";
const SvgIconMoon = (props) => (
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
      d="M21.894 13.334a.75.75 0 0 0-.75-.188A8.257 8.257 0 0 1 10.851 2.854a.75.75 0 0 0-.938-.938 9.83 9.83 0 0 0-4.96 3.469A9.75 9.75 0 0 0 12.75 21a9.66 9.66 0 0 0 5.861-1.957 9.83 9.83 0 0 0 3.469-4.96.75.75 0 0 0-.186-.749m-4.185 4.51A8.25 8.25 0 0 1 6.156 6.292a8.34 8.34 0 0 1 2.943-2.438 9.76 9.76 0 0 0 11.05 11.047 8.35 8.35 0 0 1-2.44 2.943"
    />
  </svg>
);
export default SvgIconMoon;
