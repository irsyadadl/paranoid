import * as React from "react";
const SvgIconCloud2 = (props) => (
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
      d="M17.125 19.25h-8.2c-3.963 0-7.175-3.246-7.175-7.25s3.212-7.25 7.175-7.25c2.635 0 4.94 1.436 6.187 3.576.262.45.794.687 1.31.615q.346-.048.703-.048c2.83 0 5.125 2.318 5.125 5.178s-2.294 5.179-5.125 5.179Z"
    />
  </svg>
);
export default SvgIconCloud2;
