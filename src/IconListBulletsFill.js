import * as React from "react";
const SvgIconListBulletsFill = (props) => (
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
      d="M21 5.75A2.75 2.75 0 0 0 18.25 3H5.75A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25zM9 8a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 9 8m0 4a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 9 12m-1.25 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconListBulletsFill;
