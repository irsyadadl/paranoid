import * as React from "react";
const SvgIconAttention = (props) => (
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
      d="M2.75 20.25 6.565 4.514a1 1 0 0 1 .972-.764h8.442m0 0h.485a1 1 0 0 1 .971.764L21.25 20.25m-5.271-16.5a1 1 0 0 1 .972 1.236L14.098 16.75m-.848 3.5.848-3.5m0 0H4m10.098 0H20"
    />
  </svg>
);
export default SvgIconAttention;
