import * as React from "react";
const SvgIconHeartFill = (props) => (
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
      d="M12.367 21.404c8.72-4.9 10.719-10.637 9.15-14.558-.767-1.918-2.375-3.287-4.265-3.71-1.718-.383-3.613.027-5.252 1.414-1.64-1.387-3.535-1.797-5.253-1.413-1.89.422-3.498 1.791-4.265 3.709-1.569 3.921.43 9.659 9.15 14.558a.75.75 0 0 0 .735 0"
    />
  </svg>
);
export default SvgIconHeartFill;
