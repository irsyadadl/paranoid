import * as React from "react";
const SvgIconBrandX = (props) => (
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
      d="M17.403 3.5h2.882l-6.296 7.201 7.407 9.799h-5.8l-4.542-5.943L5.856 20.5H2.973l6.734-7.702L2.602 3.5h5.946l4.106 5.432 4.75-5.432Zm-1.011 15.274h1.597L7.68 5.135H5.967z"
    />
  </svg>
);
export default SvgIconBrandX;
