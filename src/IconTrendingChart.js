import * as React from "react";
const SvgIconTrendingChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-5"}`} strokeWidth={props.strokeWidth || 1.5}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.75 13.036 1.026-2.434c.358-.852 1.577-.805 1.869.072l1.265 3.793c.308.922 1.612.91 1.902-.018l3.126-9.996c.304-.973 1.693-.923 1.927.07l3.52 14.954c.23.974 1.583 1.048 1.916.105l1.949-5.519"
    />
  </svg>
);
export default SvgIconTrendingChart;
