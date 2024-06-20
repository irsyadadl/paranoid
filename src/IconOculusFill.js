import * as React from "react";
const SvgIconOculusFill = (props) => (
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
      d="M1.964 8.531C2.874 6.467 4.913 5 7.325 5h9.35c2.412 0 4.452 1.467 5.361 3.531l.18-.182a.75.75 0 1 1 1.069 1.052l-.784.797c.273 1.862-.031 3.936-.923 5.606C20.61 17.615 18.912 19 16.504 19H7.496c-2.408 0-4.106-1.385-5.074-3.196-.892-1.67-1.196-3.744-.923-5.606l-.784-.797a.75.75 0 0 1 1.07-1.052zM10.75 8a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconOculusFill;
