import * as React from "react";
const SvgIconSimCard = (props) => (
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
      d="M11.25 2.75v4.5m4-4.5v4.5m-10.5.328V20.25a1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1V3.75a1 1 0 0 0-1-1H9.578a2 2 0 0 0-1.414.586L5.336 6.164a2 2 0 0 0-.586 1.414"
    />
  </svg>
);
export default SvgIconSimCard;
