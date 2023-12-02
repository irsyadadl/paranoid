import * as React from "react";
const SvgIconLoader2 = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v3m0 12v3M5.636 5.636l2.121 2.121m8.486 8.486 2.121 2.121M3 12.001h3m12 0h3M5.636 18.364l2.121-2.121m8.486-8.486 2.121-2.121"
    />
  </svg>
);
export default SvgIconLoader2;
