import * as React from "react";
const SvgIconColorsFill = (props) => (
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
      d="M12 2a5.346 5.346 0 0 0-5.342 5.351 5.35 5.35 0 0 0 4.335 5.256 6.48 6.48 0 0 1 6.038-3.455c.2-.562.31-1.168.31-1.8A5.346 5.346 0 0 0 12 2m.72 17.18A5.32 5.32 0 0 0 16.733 21a5.346 5.346 0 0 0 5.341-5.351 5.35 5.35 0 0 0-5.341-5.351c-1.6 0-3.035.703-4.015 1.82a6.5 6.5 0 0 1 1.04 3.53 6.48 6.48 0 0 1-1.04 3.531Zm-.423-5.333c.2.563.31 1.169.31 1.802a5.33 5.33 0 0 1-1.068 3.211A5.33 5.33 0 0 1 7.266 21a5.346 5.346 0 0 1-5.342-5.351 5.35 5.35 0 0 1 4.335-5.256 6.5 6.5 0 0 0 6.038 3.454"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconColorsFill;
