import * as React from "react";
const SvgIconCupHot = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M11 5.25v-2.5m-4 2.5v-2.5m8 2.5v-2.5m-10.25 5h12.5v13.5H4.75zm12.5 2h1.25a2.75 2.75 0 1 1 0 5.5h-1.25z"
    />
  </svg>
);
export default SvgIconCupHot;