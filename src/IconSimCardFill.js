import * as React from "react";
const SvgIconSimCardFill = (props) => (
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
      d="M18.25 2c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V7.578c0-.729.29-1.428.805-1.944l2.829-2.829A2.75 2.75 0 0 1 9.578 2H11.5v5.25a.75.75 0 0 0 1.5 0V2h2.5v5.25a.75.75 0 0 0 1.5 0V2z"
    />
  </svg>
);
export default SvgIconSimCardFill;
