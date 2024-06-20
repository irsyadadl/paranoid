import * as React from "react";
const SvgIconReceiptFill = (props) => (
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
      d="M4 3.75C4 2.784 4.784 2 5.75 2h12.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 0 1-1.243.566l-2.065-1.799-1.838 1.773a.75.75 0 0 1-1.041 0L12 20.042l-1.813 1.748a.75.75 0 0 1-1.04 0l-1.84-1.773-2.064 1.799A.75.75 0 0 1 4 21.25zm11.155 4.697a.75.75 0 0 0-1.06-1.06l-2.637 2.636-1.053-1.053a.75.75 0 1 0-1.06 1.06l1.583 1.584a.75.75 0 0 0 1.06 0zM8.75 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconReceiptFill;
