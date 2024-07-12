import * as React from "react";
const SvgIconMessageFill = (props) => (
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
      d="M19.591 5.366C17.727 3.806 15.101 3 12 3s-5.727.805-7.591 2.366C2.529 6.941 1.5 9.223 1.5 12c0 .795.264 1.793.514 2.575.257.806.532 1.482.608 1.665l.012.028.008.02.006.013c.018.05.446 1.218-.997 3.13a.75.75 0 0 0 .277 1.129c1.333.634 2.674.414 3.615.086a7 7 0 0 0 1.223-.568c1.664.76 3.54.922 5.234.922 3.101 0 5.727-.805 7.591-2.366C21.471 17.059 22.5 14.777 22.5 12s-1.03-5.059-2.909-6.634"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMessageFill;
