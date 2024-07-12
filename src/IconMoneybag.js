import * as React from "react";
const SvgIconMoneybag = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.422 7.75h5.156m-5.156 0S3.75 10.972 3.75 16.111c0 4.133 4.104 5.139 8.25 5.139s8.25-1.006 8.25-5.139c0-5.139-5.672-8.361-5.672-8.361m-5.156 0L8.167 4.528c-.17-.438-.008-.93.424-1.115.694-.295 1.867-.663 3.409-.663s2.715.368 3.409.663c.432.184.594.677.424 1.115L14.578 7.75"
    />
  </svg>
);
export default SvgIconMoneybag;
