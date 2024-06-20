import * as React from "react";
const SvgIconGuide = (props) => (
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
      d="M12 7.75a3 3 0 0 1 3-3h6.25a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1h-5.973a3.64 3.64 0 0 0-1.926.522A3.66 3.66 0 0 0 12 21.25m0-13.5a3 3 0 0 0-3-3H2.75a1 1 0 0 0-1 1v12.5a1 1 0 0 0 1 1h5.973c.68 0 1.347.164 1.926.522s1.047.87 1.351 1.478m0-13.5v13.5"
    />
  </svg>
);
export default SvgIconGuide;
