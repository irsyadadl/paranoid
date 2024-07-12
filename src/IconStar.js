import * as React from "react";
const SvgIconStar = (props) => (
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
      d="M11.55 2.033a.5.5 0 0 1 .9 0l2.569 5.354a.5.5 0 0 0 .385.279l5.911.775a.497.497 0 0 1 .278.855l-4.322 4.082a.5.5 0 0 0-.148.452l1.086 5.83a.499.499 0 0 1-.729.529l-5.242-2.83a.5.5 0 0 0-.476 0l-5.242 2.83a.499.499 0 0 1-.729-.529l1.086-5.83a.5.5 0 0 0-.148-.453L2.407 9.296a.497.497 0 0 1 .278-.855l5.91-.775a.5.5 0 0 0 .386-.279z"
    />
  </svg>
);
export default SvgIconStar;
