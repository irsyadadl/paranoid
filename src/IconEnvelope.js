import * as React from "react";
const SvgIconEnvelope = (props) => (
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
      d="M21.587 8.67a.75.75 0 1 0-.674-1.34zm-18.5-1.34a.75.75 0 1 0-.674 1.34zm9.363 5.104.337.67zm-.9 0 .337-.67zM20.5 5.75v12.5H22V5.75zm-.25 12.75H3.75V20h16.5zM3.5 18.25V5.75H2v12.5zM3.75 5.5h16.5V4H3.75zm17.163 1.83-8.8 4.434.674 1.34 8.8-4.434zm-9.026 4.434-8.8-4.434-.674 1.34 8.8 4.434.675-1.34ZM3.5 5.75a.25.25 0 0 1 .25-.25V4A1.75 1.75 0 0 0 2 5.75zm.25 12.75a.25.25 0 0 1-.25-.25H2c0 .966.784 1.75 1.75 1.75zm16.75-.25a.25.25 0 0 1-.25.25V20A1.75 1.75 0 0 0 22 18.25zm-8.387-6.486a.25.25 0 0 1-.226 0l-.675 1.34c.496.25 1.08.25 1.575 0l-.675-1.34ZM22 5.75A1.75 1.75 0 0 0 20.25 4v1.5a.25.25 0 0 1 .25.25z"
    />
  </svg>
);
export default SvgIconEnvelope;
