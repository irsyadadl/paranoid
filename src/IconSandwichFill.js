import * as React from "react";
const SvgIconSandwichFill = (props) => (
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
      d="M3 17.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.186c0 .253 0 .485-.016.68-.016.21-.055.439-.169.666a1.75 1.75 0 0 1-.783.784 1.8 1.8 0 0 1-.666.168c-.195.016-.427.016-.68.016H5.314c-.253 0-.485 0-.68-.016a1.8 1.8 0 0 1-.666-.169 1.75 1.75 0 0 1-.783-.783 1.8 1.8 0 0 1-.17-.666 9 9 0 0 1-.015-.68zm-1-4a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5zm4.136-8.827C7.924 3.435 10.152 3 12 3c1.849 0 4.076.435 5.865 1.673 1.707 1.183 2.962 3.065 3.119 5.827"
    />
  </svg>
);
export default SvgIconSandwichFill;
