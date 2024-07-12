import * as React from "react";
const SvgIconFolderUpload = (props) => (
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
      d="M12 19.25V13m0 0 2.5 2.5M12 13l-2.5 2.5m-2.125 3.75H3.75a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1h5.715a1 1 0 0 1 .832.445l1.406 2.11a1 1 0 0 0 .832.445h7.715a1 1 0 0 1 1 1v10.5a1 1 0 0 1-1 1h-3.625"
    />
  </svg>
);
export default SvgIconFolderUpload;
