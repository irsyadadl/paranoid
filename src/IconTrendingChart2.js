import * as React from "react";
const SvgIconTrendingChart2 = (props) => (
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
      d="m2.75 10.964 1.026 2.434c.358.852 1.577.805 1.869-.072L6.91 9.533c.308-.922 1.612-.91 1.902.018l3.126 9.996c.304.973 1.693.923 1.927-.07l3.52-14.954c.23-.974 1.583-1.048 1.916-.105l1.949 5.518"
    />
  </svg>
);
export default SvgIconTrendingChart2;
