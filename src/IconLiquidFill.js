import * as React from "react";
const SvgIconLiquidFill = (props) => (
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
      d="M13.114 2.43a1.654 1.654 0 0 0-2.228 0c-.893.806-2.595 2.445-4.079 4.488C5.337 8.94 4 11.47 4 14.038 4 18.442 7.587 22 12 22s8-3.56 8-7.961c0-2.569-1.337-5.098-2.807-7.121-1.484-2.043-3.186-3.682-4.08-4.487Z"
    />
  </svg>
);
export default SvgIconLiquidFill;
