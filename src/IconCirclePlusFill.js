import * as React from "react";
const SvgIconCirclePlusFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10.75-4.242a.75.75 0 0 0-1.5 0v3.493H7.757a.75.75 0 1 0 0 1.5h3.493v3.492a.75.75 0 0 0 1.5 0v-3.492h3.493a.75.75 0 1 0 0-1.5H12.75z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconCirclePlusFill;
