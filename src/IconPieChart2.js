import * as React from "react";
const SvgIconPieChart2 = (props) => (
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
      d="M21.065 8.347a7.69 7.69 0 0 0-5.412-5.412c-.273-.073-.41-.11-.545-.07a.53.53 0 0 0-.284.218c-.074.12-.074.277-.074.59V8.45c0 .28 0 .42.055.527a.5.5 0 0 0 .218.218c.107.055.247.055.527.055h4.777c.313 0 .47 0 .59-.074a.53.53 0 0 0 .218-.284c.04-.136.003-.272-.07-.545"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.25 13a8.25 8.25 0 1 1-7.996-8.246v6.396c0 .56 0 .84.11 1.054a1 1 0 0 0 .436.437c.214.11.494.11 1.054.11h6.392q.004.123.004.249"
    />
  </svg>
);
export default SvgIconPieChart2;
