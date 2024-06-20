import * as React from "react";
const SvgIconBrainFill = (props) => (
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
      d="M11.26 2.18a4.86 4.86 0 0 0-5.882 3.012A4.35 4.35 0 0 0 2.84 12a4.347 4.347 0 0 0 1.53 6.442 5.377 5.377 0 0 0 6.908 3.232.8.8 0 0 1-.028-.203V17a2.5 2.5 0 0 0-2.5-2.5.75.75 0 0 1 0-1.5c.946 0 1.815.328 2.5.877V2.3q0-.06.01-.12m1.462 19.494a5.377 5.377 0 0 0 6.907-3.232A4.347 4.347 0 0 0 21.16 12a4.35 4.35 0 0 0-2.537-6.808 4.86 4.86 0 0 0-5.881-3.012q.009.06.009.12v4.704a2.5 2.5 0 0 0 2.5 2.496.75.75 0 0 1 0 1.5 4 4 0 0 1-2.5-.877V21.47q0 .106-.028.203Z"
    />
  </svg>
);
export default SvgIconBrainFill;
