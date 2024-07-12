import * as React from "react";
const SvgIconPersonFill = (props) => (
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
      d="M12 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m0 10.5c-4.173 0-7.227 2.794-8.06 6.501C3.69 20.112 4.6 21 5.6 21h12.803c.999 0 1.908-.888 1.659-1.999-.834-3.707-3.887-6.501-8.06-6.501Z"
    />
  </svg>
);
export default SvgIconPersonFill;
