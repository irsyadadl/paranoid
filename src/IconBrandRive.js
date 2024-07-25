import * as React from "react";
const SvgIconBrandRive = (props) => (
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
      d="M3.482 4.106c0 .611.5 1.106 1.118 1.106h9.268q1.583 0 2.609.969 1.025.968 1.025 2.489 0 1.405-1.025 2.304-1.025.876-2.61.876H9.84c-.618 0-1.119.495-1.119 1.107 0 .61.501 1.106 1.119 1.106h4.447l4.007 6.36q.373.577 1.048.577.747 0 1.049-.576.303-.6-.116-1.268l-3.565-5.67q1.445-.645 2.283-1.89.84-1.266.839-2.926 0-1.683-.769-2.95a5.2 5.2 0 0 0-2.097-1.983Q15.616 3 13.867 3H4.601c-.618 0-1.119.495-1.119 1.106"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandRive;
