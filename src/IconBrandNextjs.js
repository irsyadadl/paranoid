import * as React from "react";
const SvgIconBrandNextjs = (props) => (
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
      d="M12 21.667A9.667 9.667 0 0 0 21.667 12 9.667 9.667 0 0 0 12 2.334C6.66 2.334 2.333 6.66 2.333 12S6.661 21.667 12 21.667"
    />
    <path
      fill="#fff"
      d="M18.612 19.502 9.682 8H8v7.997h1.346V9.709l8.21 10.607q.556-.373 1.056-.814"
    />
    <path fill="#fff" d="M16.111 8h-1.333v8h1.333z" />
  </svg>
);
export default SvgIconBrandNextjs;
