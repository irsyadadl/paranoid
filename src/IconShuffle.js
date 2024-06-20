import * as React from "react";
const SvgIconShuffle = (props) => (
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
      d="M2.75 18.188h1.642a1 1 0 0 0 .706-.293l10.86-10.852a1 1 0 0 1 .706-.293H20.5m-17.75-1h1.586a1 1 0 0 1 .707.293L8.5 9.5m12 7.656h-3.97a1 1 0 0 1-.713-.299L13.5 14.5m4.75-10.75 3 3-3 3m-.083 4.313 3.083 3.093-3.083 3.094"
    />
  </svg>
);
export default SvgIconShuffle;
