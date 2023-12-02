import * as React from "react";
const SvgIconMoon = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M20.25 14.199A8.5 8.5 0 0 1 9.802 3.75 8.534 8.534 0 1 0 20.25 14.198Zm.27-1.666a7 7 0 0 1-8.242-10.565 10.218 10.218 0 0 0-1.823.115c-4.807.743-8.487 4.9-8.487 9.915 0 5.542 4.492 10.034 10.034 10.034 5.016 0 9.172-3.68 9.916-8.487a10.113 10.113 0 0 0 .114-1.822 7.029 7.029 0 0 1-1.512.81"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconMoon;
