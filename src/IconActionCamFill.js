import * as React from "react";
const SvgIconActionCamFill = (props) => (
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
      d="M12.01 4a3.24 3.24 0 0 0-.51 1.75v5.503a3.25 3.25 0 0 0 3.25 3.25h5.5c.644 0 1.245-.188 1.75-.511v5.258A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25V5.75C2 4.784 2.784 4 3.75 4zM5 17.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.75 4A1.75 1.75 0 0 0 13 5.75v5.503c0 .966.784 1.75 1.75 1.75h5.5a1.75 1.75 0 0 0 1.75-1.75V5.75A1.75 1.75 0 0 0 20.25 4zm1.75 4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconActionCamFill;
