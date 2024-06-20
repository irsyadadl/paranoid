import * as React from "react";
const SvgIconLayersFill = (props) => (
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
      d="M11.37 3.19a1.75 1.75 0 0 1 1.261 0l8.226 3.178c1.492.576 1.492 2.688 0 3.265L12.63 12.81a1.75 1.75 0 0 1-1.261 0L3.145 9.633c-1.493-.577-1.493-2.689 0-3.265z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M20.857 13.633 12.63 16.81a1.75 1.75 0 0 1-1.261 0l-8.225-3.178c-.89-.344-1.249-1.233-1.078-2.017l9.801 3.787a.37.37 0 0 0 .268 0l9.799-3.786c.17.784-.19 1.672-1.078 2.016Z"
    />
    <path
      fill="currentColor"
      d="M20.857 17.633 12.63 20.81a1.75 1.75 0 0 1-1.261 0l-8.225-3.178c-.89-.344-1.249-1.233-1.078-2.017l9.801 3.787a.37.37 0 0 0 .268 0l9.799-3.786c.17.784-.19 1.672-1.078 2.016Z"
    />
  </svg>
);
export default SvgIconLayersFill;
