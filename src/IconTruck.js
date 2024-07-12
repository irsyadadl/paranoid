import * as React from "react";
const SvgIconTruck = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 16.25h4.5m-9.786 0H3.75a1 1 0 0 1-1-1v-4.938a1 1 0 0 1 .178-.569l1.774-2.562a1 1 0 0 1 .822-.431H8.75V15m10.606 1.25h.894a1 1 0 0 0 1-1v-9.5a1 1 0 0 0-1-1H9.75a1 1 0 0 0-1 1v1.09m1 9.91a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm9.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </svg>
);
export default SvgIconTruck;
