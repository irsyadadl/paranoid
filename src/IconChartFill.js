import * as React from "react";
const SvgIconChartFill = (props) => (
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
      d="M17.42 3a1.75 1.75 0 0 0-1.75 1.75v14.5c0 .966.783 1.75 1.75 1.75h1.83A1.75 1.75 0 0 0 21 19.25V4.75A1.75 1.75 0 0 0 19.25 3zm-6.34 5.334a1.75 1.75 0 0 0-1.75 1.75v9.167c0 .966.784 1.75 1.75 1.75h1.83a1.75 1.75 0 0 0 1.75-1.75v-9.167a1.75 1.75 0 0 0-1.75-1.75zm-6.33 4.443A1.75 1.75 0 0 0 3 14.527v4.723c0 .966.784 1.75 1.75 1.75h1.83a1.75 1.75 0 0 0 1.75-1.75v-4.723a1.75 1.75 0 0 0-1.75-1.75z"
    />
  </svg>
);
export default SvgIconChartFill;
