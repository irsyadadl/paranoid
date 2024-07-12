import * as React from "react";
const SvgIconFolderRestricted = (props) => (
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
      d="M12.5 19.25h7.75a1 1 0 0 0 1-1V7.75a1 1 0 0 0-1-1h-7.715a1 1 0 0 1-.832-.445l-1.406-2.11a1 1 0 0 0-.832-.445H3.75a1 1 0 0 0-1 1V9.5m6.182 9.932a4.5 4.5 0 0 0-6.364-6.364m6.364 6.364a4.5 4.5 0 0 1-6.364-6.364m6.364 6.364-6.364-6.364"
    />
  </svg>
);
export default SvgIconFolderRestricted;
