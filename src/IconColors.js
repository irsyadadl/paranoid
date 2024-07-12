import * as React from "react";
const SvgIconColors = (props) => (
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
      strokeWidth={1.5}
      d="M7.303 9.989a5.1 5.1 0 0 1-.442-2.092c0-2.843 2.3-5.147 5.139-5.147a5.143 5.143 0 0 1 5.139 5.147c0 .745-.158 1.453-.442 2.092m-9.394 0a5.145 5.145 0 0 0-4.553 5.114c0 2.843 2.3 5.147 5.139 5.147A5.13 5.13 0 0 0 12 18.192M7.303 9.989a5.14 5.14 0 0 0 4.111 3.022m5.283-3.022A5.13 5.13 0 0 0 12 12.014m4.697-2.025a5.145 5.145 0 0 1 4.553 5.114c0 2.843-2.3 5.147-5.139 5.147A5.13 5.13 0 0 1 12 18.192m0-6.178c-.23.308-.428.642-.586.997m.586-.997c.23.308.428.642.586.997m-1.172 0a5.2 5.2 0 0 0 1.172 0m0 0c.284.64.442 1.347.442 2.092A5.13 5.13 0 0 1 12 18.192"
    />
  </svg>
);
export default SvgIconColors;
