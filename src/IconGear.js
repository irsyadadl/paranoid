import * as React from "react";
const SvgIconGear = (props) => (
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
      d="m8.552 5.37-1.793-.414a1 1 0 0 0-.932.267l-.604.604a1 1 0 0 0-.267.932l.414 1.793a1 1 0 0 1-.42 1.056l-1.755 1.17a1 1 0 0 0-.445.832v.78a1 1 0 0 0 .445.832l1.755 1.17a1 1 0 0 1 .42 1.056l-.414 1.793a1 1 0 0 0 .267.932l.604.604a1 1 0 0 0 .932.267l1.793-.414a1 1 0 0 1 1.056.42l1.17 1.755a1 1 0 0 0 .832.445h.78a1 1 0 0 0 .832-.445l1.17-1.755a1 1 0 0 1 1.056-.42l1.793.414a1 1 0 0 0 .932-.267l.604-.604a1 1 0 0 0 .267-.932l-.414-1.793a1 1 0 0 1 .42-1.056l1.755-1.17a1 1 0 0 0 .445-.832v-.78a1 1 0 0 0-.445-.832l-1.755-1.17a1 1 0 0 1-.42-1.056l.414-1.793a1 1 0 0 0-.267-.932l-.604-.604a1 1 0 0 0-.932-.267l-1.793.414a1 1 0 0 1-1.056-.42l-1.17-1.755a1 1 0 0 0-.832-.445h-.78a1 1 0 0 0-.832.445L9.608 4.95a1 1 0 0 1-1.056.42Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.75 12a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Z"
    />
  </svg>
);
export default SvgIconGear;
