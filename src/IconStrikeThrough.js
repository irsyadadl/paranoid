import * as React from "react";
const SvgIconStrikeThrough = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 25"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.578 7.611c-.25-1.205-1.3-4.111-5.576-4.111-4.111 0-5.653 2.673-5.653 4.625 0 3.038 2.806 3.83 5.653 4.59M5.969 17.89C6.353 19.094 7.724 22 12.002 22c4.11 0 5.91-2.673 5.91-4.625 0-.752-.172-1.366-.474-1.876M2.75 12.75h18.5"
    />
  </svg>
);
export default SvgIconStrikeThrough;
