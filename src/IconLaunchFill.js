import * as React from "react";
const SvgIconLaunchFill = (props) => (
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
      d="m15.5 14.324-4 3.177v1.565c0 .19.203.31.37.22l3.5-1.91a.25.25 0 0 0 .13-.22zM10 17.45 6.55 14H4.936a1.75 1.75 0 0 1-1.537-2.588l1.91-3.5A1.75 1.75 0 0 1 6.843 7h4.058c2.61-2.776 5.523-4.66 9.29-4.959a1.64 1.64 0 0 1 1.767 1.768c-.298 3.767-2.182 6.68-4.959 9.29v4.058c0 .64-.35 1.23-.912 1.536l-3.5 1.909A1.75 1.75 0 0 1 10 19.066zM9.676 8.5H6.844a.25.25 0 0 0-.22.13l-1.909 3.5a.25.25 0 0 0 .22.37h1.564z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M1.999 19.195A2.806 2.806 0 1 1 4.804 22H2.75a.75.75 0 0 1-.75-.75z"
    />
  </svg>
);
export default SvgIconLaunchFill;
