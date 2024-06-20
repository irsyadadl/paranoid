import * as React from "react";
const SvgIconBrandApple = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      d="M20.003 7.158a4.76 4.76 0 0 0-2.273 4.002 4.63 4.63 0 0 0 2.817 4.246 11 11 0 0 1-1.442 2.98c-.899 1.294-1.838 2.587-3.267 2.587s-1.796-.83-3.443-.83c-1.606 0-2.178.857-3.485.857s-2.218-1.198-3.266-2.668a12.9 12.9 0 0 1-2.191-6.955c0-4.083 2.654-6.247 5.267-6.247 1.388 0 2.545.912 3.416.912.83 0 2.123-.966 3.702-.966a4.95 4.95 0 0 1 4.165 2.082m-4.913-3.81A4.7 4.7 0 0 0 16.206.421 2 2 0 0 0 16.165 0a4.7 4.7 0 0 0-3.09 1.592 4.56 4.56 0 0 0-1.157 2.845q0 .193.041.381.142.027.286.027a4.08 4.08 0 0 0 2.845-1.498Z"
    />
  </svg>
);
export default SvgIconBrandApple;
