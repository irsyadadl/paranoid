import * as React from "react";
const SvgIconHeartBeatFill = (props) => (
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
      d="M21.519 6.846c1.569 3.921-.43 9.659-9.15 14.558a.75.75 0 0 1-.735 0c-8.72-4.9-10.719-10.637-9.15-14.558.767-1.918 2.375-3.287 4.265-3.71 1.718-.383 3.613.027 5.253 1.414 1.64-1.387 3.534-1.797 5.252-1.413 1.89.422 3.498 1.791 4.265 3.709M11.17 8.665a.75.75 0 0 0-1.328-.026L8.407 11.25H6.75a.75.75 0 0 0 0 1.5h2.1a.75.75 0 0 0 .657-.389l.961-1.747 2.361 4.721a.75.75 0 0 0 1.328.026l1.437-2.611h1.656a.75.75 0 0 0 0-1.5h-2.1a.75.75 0 0 0-.657.389l-.961 1.747z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconHeartBeatFill;
