import * as React from "react";
const SvgIconRobotFill = (props) => (
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
      d="M12 2a.75.75 0 0 1 .75.75V4h7c.966 0 1.75.784 1.75 1.75v2.335a1.5 1.5 0 0 1 1 1.415v1a1.5 1.5 0 0 1-1 1.415v4.335A3.75 3.75 0 0 1 17.75 20H6.25a3.75 3.75 0 0 1-3.75-3.75v-4.335a1.5 1.5 0 0 1-1-1.415v-1a1.5 1.5 0 0 1 1-1.415V5.75C2.5 4.784 3.284 4 4.25 4h7V2.75A.75.75 0 0 1 12 2m-5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m7 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-5 4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 14.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconRobotFill;
