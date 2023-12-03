import * as React from "react";
const SvgIconTrashEmpty = ({ title, titleId, ...props }) => (
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
      d="m5.75 21.25-.748.048.045.702h.703zm12.5 0V22h.703l.045-.702-.748-.048ZM2.75 5H2v1.5h.75zm18.5 1.5H22V5h-.75zM4.002 5.798l1 15.5 1.496-.096-1-15.5-1.496.096ZM5.75 22h12.5v-1.5H5.75zm13.248-.702 1-15.5-1.496-.096-1 15.5 1.496.096M19.25 5H4.75v1.5h14.5zM2.75 6.5h2V5h-2zm16.5 0h2V5h-2zM12 3.5a3.252 3.252 0 0 1 3.148 2.437l1.452-.374A4.752 4.752 0 0 0 12 2zM8.852 5.937A3.252 3.252 0 0 1 12 3.5V2a4.752 4.752 0 0 0-4.6 3.563z"
    />
  </svg>
);
export default SvgIconTrashEmpty;
