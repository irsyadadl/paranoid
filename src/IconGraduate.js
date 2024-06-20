import * as React from "react";
const SvgIconGraduate = (props) => (
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
      d="M22.25 9 12 14.25 2.5 9 12 3.75zm0 0v6.25m-4-4.031v5.174a1 1 0 0 1-.539.887l-5.25 2.73a1 1 0 0 1-.922 0l-5.25-2.73a1 1 0 0 1-.539-.887v-5.3"
    />
  </svg>
);
export default SvgIconGraduate;
