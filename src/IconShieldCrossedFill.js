import * as React from "react";
const SvgIconShieldCrossedFill = (props) => (
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
      d="m3 4.959 9-3 9 3v6.953c0 2.737-1.183 4.758-2.859 6.347-1.647 1.563-3.8 2.738-5.785 3.808L12 22.26l-.356-.193c-1.984-1.07-4.138-2.245-5.785-3.808C4.184 16.67 3 14.65 3 11.912zm11.223 9.851 1.063-1.058-2.24-2.252 2.24-2.252-1.063-1.058-2.235 2.247L9.753 8.19 8.689 9.248 10.93 11.5l-2.24 2.253 1.063 1.058 2.235-2.247z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconShieldCrossedFill;
