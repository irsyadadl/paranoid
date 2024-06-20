import * as React from "react";
const SvgIconBrandTwitch = (props) => (
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
      d="M13.542 6.607H12v4.607h1.542zm3.854 4.607V6.607h-1.541v4.607z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6.604 2 2.75 5.84v13.82h4.625v3.84l3.854-3.84h3.084l6.937-6.91V2zm10.023 13.054 3.083-3.072V3.536H7.377v11.518h3.083v3.071l3.084-3.071z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconBrandTwitch;
