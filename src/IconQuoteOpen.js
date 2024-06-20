import * as React from "react";
const SvgIconQuoteOpen = (props) => (
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
      d="M13.77 14.604c0-2.013 1.675-3.646 3.74-3.646s3.74 1.633 3.74 3.646-1.674 3.646-3.74 3.646c-2.065 0-3.74-1.632-3.74-3.646m0 0c-.267-4.948 2.137-6.77 5.343-8.854M2.77 14.604c0-2.013 1.675-3.646 3.74-3.646s3.74 1.633 3.74 3.646-1.674 3.646-3.74 3.646c-2.065 0-3.74-1.632-3.74-3.646m0 0c-.267-4.948 2.137-6.77 5.343-8.854"
    />
  </svg>
);
export default SvgIconQuoteOpen;
