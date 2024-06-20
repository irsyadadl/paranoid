import * as React from "react";
const SvgIconComputer = (props) => (
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
      d="M9.75 17.25v-.75a.75.75 0 0 0-.75.75zm4.5 0H15a.75.75 0 0 0-.75-.75zm0 4V22a.75.75 0 0 0 .75-.75zm-4.5 0H9c0 .414.336.75.75.75zm-7-8.75H2V14h.75zm7 5.5h4.5v-1.5h-4.5zm3.75-.75v4H15v-4zm.75 3.25h-4.5V22h4.5zm-3.75.75v-4H9v4zm10.75-8.75H2.75V14h18.5zm-17.5-8h16.5V3H3.75zm16.75.25v11.5H22V4.75zm-.25 11.75H3.75V18h16.5zM3.5 16.25V4.75H2v11.5zm.25.25a.25.25 0 0 1-.25-.25H2c0 .966.784 1.75 1.75 1.75zm16.75-.25a.25.25 0 0 1-.25.25V18A1.75 1.75 0 0 0 22 16.25zM20.25 4.5a.25.25 0 0 1 .25.25H22A1.75 1.75 0 0 0 20.25 3zM3.75 3A1.75 1.75 0 0 0 2 4.75h1.5a.25.25 0 0 1 .25-.25z"
    />
  </svg>
);
export default SvgIconComputer;
