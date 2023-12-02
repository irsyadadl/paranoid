import * as React from "react";
const SvgIconSearchSketchbook = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M3.755 2.745v-.75h-.75v.75zm15.495 0H20v-.75h-.75zM3.755 21.246h-.75v.75h.75v-.75M18.5 12.5v.75H20v-.75zM12 21.996a.75.75 0 0 0 0-1.5zM7.75 14a.75.75 0 0 0 0 1.5zm1.5 1.5a.75.75 0 0 0 0-1.5zM7.75 6a.75.75 0 0 0 0 1.5zm7.5 1.5a.75.75 0 0 0 0-1.5zM7.75 10a.75.75 0 0 0 0 1.5zm3.5 1.5a.75.75 0 0 0 0-1.5zm9.47 11.273.53.53 1.06-1.06-.53-.53zM3.755 3.495H19.25v-1.5H3.755v1.5m.75 17.751v-18.5h-1.5v18.5h1.5M18.5 2.746V12.5H20V2.745h-1.5ZM12 20.495H3.755v1.5H12zM7.75 15.5h1.5V14h-1.5zm0-8h7.5V6h-7.5zm0 4h3.5V10h-3.5zm11.091 8.334a2.25 2.25 0 0 1-3.182 0l-1.06 1.06a3.75 3.75 0 0 0 5.303 0zm-3.182 0a2.25 2.25 0 0 1 0-3.182l-1.06-1.061a3.75 3.75 0 0 0 0 5.303l1.06-1.06Zm0-3.182a2.25 2.25 0 0 1 3.182 0l1.06-1.061a3.75 3.75 0 0 0-5.303 0l1.061 1.06Zm3.182 0a2.25 2.25 0 0 1 0 3.182l1.06 1.06a3.75 3.75 0 0 0 0-5.303l-1.06 1.06Zm0 4.242 1.879 1.879 1.06-1.06-1.878-1.88-1.061 1.061Z"
    />
  </svg>
);
export default SvgIconSearchSketchbook;
