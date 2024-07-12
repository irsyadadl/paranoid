import * as React from "react";
const SvgIconUmbrella = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`paranoid-ic ${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <g clipPath="url(#icon-umbrella_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.624 20.01-5.01-8.678M7.374 3.99a9.25 9.25 0 0 0-3.386 12.636c1.267-1.918 3.047-2.946 4.896-2.826m-1.51-9.81A9.25 9.25 0 0 1 20.01 7.375c-2.294.138-4.075 1.165-4.896 2.826M7.374 3.99c-1.72.994-1.045 5.385 1.51 9.81m-1.51-9.81c1.72-.993 5.186 1.788 7.74 6.212M8.884 13.8c.855-1.088 1.728-1.888 2.73-2.467m3.5-1.13c-1.37.197-2.5.552-3.5 1.13"
      />
    </g>
    <defs>
      <clipPath id="icon-umbrella_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconUmbrella;
