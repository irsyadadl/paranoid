import * as React from "react";
const SvgIconPeople = (props) => (
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
      d="M15 2.75a3.5 3.5 0 1 1 0 7m5.75 10.5h1.5c.552 0 1.008-.45.921-.996-.404-2.55-2.323-4.825-4.921-5.745m-9-3.759a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m-8.173 9.472c.552-3.553 4-6.472 8.173-6.472 4.172 0 7.62 2.92 8.173 6.472.085.546-.37.997-.923.997H2c-.552 0-1.008-.45-.923-.997"
    />
  </svg>
);
export default SvgIconPeople;
