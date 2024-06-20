import * as React from "react";
const SvgIconWhiteboardFill = (props) => (
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
      d="M12.75 2.75a.75.75 0 0 0-1.5 0V4h-7.5A1.75 1.75 0 0 0 2 5.75v11.5c0 .966.784 1.75 1.75 1.75h3.21l-.672 2.013a.75.75 0 0 0 1.424.474L8.54 19h2.709v1.25a.75.75 0 0 0 1.5 0V19h2.71l.828 2.487a.75.75 0 0 0 1.424-.474L17.04 19h3.209A1.75 1.75 0 0 0 22 17.25V5.75A1.75 1.75 0 0 0 20.25 4h-7.5z"
    />
  </svg>
);
export default SvgIconWhiteboardFill;
