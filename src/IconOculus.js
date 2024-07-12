import * as React from "react";
const SvgIconOculus = (props) => (
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
      d="M10.75 8.75h2.5m8.448 1.196 1.052-1.071m-1.052 1.07c-.46-2.373-2.518-4.195-5.023-4.195h-9.35c-2.505 0-4.563 1.822-5.023 4.196m19.396 0c.7 3.606-1.052 8.304-5.194 8.304H7.496c-4.142 0-5.893-4.698-5.194-8.304M1.25 8.875l1.052 1.07"
    />
  </svg>
);
export default SvgIconOculus;
