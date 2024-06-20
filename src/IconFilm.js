import * as React from "react";
const SvgIconFilm = (props) => (
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 12h4m-4 0V7.875m0 4.125v4.125m4-4.125h8.5m-8.5 0v4.125m0-4.125V7.875M16.25 12h4m-4 0v4.583m0-4.583V7.875m4 4.125V7.875m0 4.125v4.583m-4 3.667h3a1 1 0 0 0 1-1v-2.667m-4 3.667v-3.667m0 3.667h-8.5m8.5-16.5h3a1 1 0 0 1 1 1v3.125m-4-4.125v4.125m0-4.125h-8.5m8.5 4.125h4m-4 8.708h4M7.75 20.25h-3a1 1 0 0 1-1-1v-3.125m4 4.125v-4.125m0-12.375h-3a1 1 0 0 0-1 1v3.125m4-4.125v4.125m-4 0h4m-4 8.25h4"
    />
  </svg>
);
export default SvgIconFilm;
