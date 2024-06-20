import * as React from "react";
const SvgIconSplitFill = (props) => (
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
      d="M12 2a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 12 2M2 5.75C2 4.784 2.784 4 3.75 4H9v16H3.75A1.75 1.75 0 0 1 2 18.25zM15 4h5.25c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H15z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconSplitFill;
