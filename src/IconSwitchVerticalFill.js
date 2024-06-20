import * as React from "react";
const SvgIconSwitchVerticalFill = (props) => (
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
      d="M16.75 3a.75.75 0 0 1 .75.75v14.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.47 3.47a1.5 1.5 0 0 1-2.12 0l-3.47-3.47a.75.75 0 1 1 1.06-1.06L16 18.69V3.75a.75.75 0 0 1 .75-.75m-10.56.5a1.5 1.5 0 0 1 2.12 0l-.53.53.53-.53 3.47 3.47a.75.75 0 0 1-1.06 1.06L8 5.31v14.94a.75.75 0 0 1-1.5 0V5.31L3.78 8.03a.75.75 0 0 1-1.06-1.06zl.53.53z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSwitchVerticalFill;
