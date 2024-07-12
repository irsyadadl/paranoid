import * as React from "react";
const SvgIconStarFill = (props) => (
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
      d="M13.126 1.709c-.454-.945-1.8-.945-2.253 0L8.363 6.94l-5.777.757c-1.04.137-1.462 1.42-.695 2.144l4.222 3.987-1.06 5.695c-.193 1.036.903 1.822 1.822 1.326L12 18.082l5.124 2.767c.92.496 2.015-.29 1.822-1.326l-1.06-5.695 4.223-3.987c.767-.724.344-2.007-.696-2.144l-5.777-.757z"
    />
  </svg>
);
export default SvgIconStarFill;
