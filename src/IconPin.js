import * as React from "react";
const SvgIconPin = (props) => (
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
      d="m8.375 15.625 4.423 4.423a1 1 0 0 0 1.669-.432l1.921-6.724a1 1 0 0 1 .465-.594l3.76-2.148a1 1 0 0 0 .211-1.576l-5.398-5.398a1 1 0 0 0-1.576.21l-2.148 3.76a1 1 0 0 1-.594.466L4.384 9.533a1 1 0 0 0-.432 1.669zm0 0 .007-.007m-.007.007L3.75 20.25"
    />
  </svg>
);
export default SvgIconPin;
