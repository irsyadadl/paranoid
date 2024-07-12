import * as React from "react";
const SvgIconGift = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.75V6.083m0 1.667h-1.667A3.333 3.333 0 0 1 7 4.417c0-.92.746-1.667 1.667-1.667A3.333 3.333 0 0 1 12 6.083m0 1.667h1.667A3.333 3.333 0 0 0 17 4.417c0-.92-.746-1.667-1.667-1.667A3.333 3.333 0 0 0 12 6.083m0 1.667H4.75a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1M12 7.75h7.25a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1M12 7.75V12m0 8.25H5.75a1 1 0 0 1-1-1V12M12 20.25h6.25a1 1 0 0 0 1-1V12M12 20.25V12m0 0h7.25M12 12H4.75m0-.5v.5m14.5 0v-.5"
    />
  </svg>
);
export default SvgIconGift;
