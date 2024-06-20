import * as React from "react";
const SvgIconMoonStar = (props) => (
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
      d="M10.864 3.575A8.502 8.502 0 0 0 12 20.5c4.31 0 7.87-3.207 8.425-7.364a7.25 7.25 0 0 1-9.56-9.56ZM2 12C2 6.477 6.477 2 12 2q.102 0 .204.002a.75.75 0 0 1 .597 1.183 5.75 5.75 0 0 0 8.014 8.014.75.75 0 0 1 1.183.597L22 12c0 5.523-4.477 10-10 10S2 17.523 2 12"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m16.24 5.018.812-1.624a.5.5 0 0 1 .894 0l.812 1.624a.5.5 0 0 0 .224.223l1.623.812a.5.5 0 0 1 0 .894l-1.623.812a.5.5 0 0 0-.224.223l-.812 1.624a.5.5 0 0 1-.894 0l-.812-1.624a.5.5 0 0 0-.223-.223l-1.623-.812a.5.5 0 0 1 0-.894l1.623-.812a.5.5 0 0 0 .223-.223"
    />
  </svg>
);
export default SvgIconMoonStar;
