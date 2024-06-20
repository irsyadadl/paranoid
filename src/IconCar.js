import * as React from "react";
const SvgIconCar = (props) => (
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
      d="m2.25 10.75 3.456-5.53a1 1 0 0 1 .848-.47h10.892a1 1 0 0 1 .848.47l3.456 5.53m-19.5 0H.75m1.5 0v7.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.071h12.5v1.071a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-7.5m0 0h1.5m-17.5 2.286h2m8.5 0h2"
    />
  </svg>
);
export default SvgIconCar;
