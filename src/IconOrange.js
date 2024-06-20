import * as React from "react";
const SvgIconOrange = (props) => (
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
      d="M12 4.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m0 0c-.307-1.382-1.84-2.807-4-3m8.975 11.75a5 5 0 0 1-4.475 4.475m2.015-16.153a4.46 4.46 0 0 0-2.108 2.808 4.46 4.46 0 0 0 3.485-.423A4.46 4.46 0 0 0 18 1.4c-1.29-.212-2.386-.212-3.485.422"
    />
  </svg>
);
export default SvgIconOrange;
