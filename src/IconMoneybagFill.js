import * as React from "react";
const SvgIconMoneybagFill = (props) => (
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
      d="M3.851 19.03C3.294 18.19 3 17.178 3 16c.45-3.15 1.71-5.49 4.51-7.75h8.99v-.064C19.241 10.42 20.541 12.789 21 16c0 1.178-.294 2.19-.851 3.03-.553.834-1.326 1.439-2.195 1.872C16.247 21.756 14.058 22 12 22c-2.059 0-4.247-.245-5.954-1.098-.869-.433-1.642-1.038-2.195-1.872M16.334 3.973c.168-.448-.002-.958-.433-1.163C14.738 2.257 13.433 2 12 2s-2.738.257-3.901.81c-.432.205-.601.715-.433 1.163l1.036 2.764-.035.013h6.666l-.035-.013z"
    />
  </svg>
);
export default SvgIconMoneybagFill;
