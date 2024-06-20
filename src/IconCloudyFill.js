import * as React from "react";
const SvgIconCloudyFill = (props) => (
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
      d="M10.49 6.28a7 7 0 0 0-1.573-.18C5.093 6.1 2 9.215 2 13.05S5.093 20 8.917 20h7.708C19.597 20 22 17.578 22 14.6a5.4 5.4 0 0 0-2.54-4.589 4.9 4.9 0 0 0 .484-2.128C19.944 5.19 17.772 3 15.084 3a4.86 4.86 0 0 0-4.594 3.28m1.415.5a6.95 6.95 0 0 1 2.72 2.345c.13.191.416.306.69.237a5.36 5.36 0 0 1 2.773.04c.228-.456.356-.971.356-1.519 0-1.872-1.508-3.383-3.36-3.383-1.47 0-2.725.952-3.18 2.28Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCloudyFill;
