import * as React from "react";
const SvgIconPackage = (props) => (
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
      d="m20.97 6.202-8.25-4.514a1.49 1.49 0 0 0-1.44 0L3.03 6.204a1.5 1.5 0 0 0-.78 1.312v8.966a1.5 1.5 0 0 0 .78 1.313l8.25 4.516a1.49 1.49 0 0 0 1.44 0l8.25-4.516a1.5 1.5 0 0 0 .78-1.313V7.517a1.5 1.5 0 0 0-.78-1.315M12 3l7.532 4.125-2.791 1.528-7.533-4.125zm0 8.25L4.468 7.125l3.178-1.74 7.532 4.125zM3.75 8.438l7.5 4.104v8.043l-7.5-4.102zm16.5 8.042-7.5 4.105v-8.04l3-1.64v3.345a.75.75 0 1 0 1.5 0v-4.167l3-1.645z"
    />
  </svg>
);
export default SvgIconPackage;
